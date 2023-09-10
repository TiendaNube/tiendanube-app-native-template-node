import { tiendanubeAuthClient } from "@config";
import { BadRequestException } from "@utils";
import { userRepository } from "@repository";
import { TiendanubeAuthRequest, TiendanubeAuthInterface } from "@features/auth";

class InstallAppService {
  public async install(code: string): Promise<TiendanubeAuthInterface> {
    if (!code) {
      throw new BadRequestException("The authorization code not found");
    }

    const body: TiendanubeAuthRequest = {
      client_id: process.env.CLIENT_ID as string,
      client_secret: process.env.CLIENT_SECRET as string,
      grant_type: "authorization_code",
      code: code,
    };

    const authenticateResponse = await this.authenticateApp(body);

    // This condition will be true when the code has been used or is invalid.
    if (authenticateResponse.error && authenticateResponse.error_description) {
      throw new BadRequestException(
        authenticateResponse.error as string,
        authenticateResponse.error_description
      );
    }

    // Insert response of Authentication API at db.json file
    userRepository.save(authenticateResponse);

    return authenticateResponse;
  }

  private async authenticateApp(
    body: TiendanubeAuthRequest
  ): Promise<TiendanubeAuthInterface> {
    return tiendanubeAuthClient.post("/", body);
  }
}

export default new InstallAppService();
