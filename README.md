# Nuvemshop App Integrated Template for Node.js

![Licença](https://img.shields.io/badge/licença-MIT-blue)

Welcome to the Node.js and React app template repository for Nuvemshop. This repository provides a solid foundation for building integrated apps using Node.js and React, customized for seamless integration with the Nuvemshop platform.

## Developer resources

Explore essential resources for developing Nuvemshop native apps using Node.js and React:

- [Introduction to Nuvemshop App Development](https://dev.nuvemshop.com.br/en/docs/applications/overview)
- [Nuvemshop API Library Documentation](https://dev.nuvemshop.com.br/en/docs/developer-tools/nuvemshop-api)
- [Nimbus Library Documentation](https://dev.nuvemshop.com.br/en/docs/developer-tools/nimbus)
- [Nexo Library Documentation](https://dev.nuvemshop.com.br/en/docs/developer-tools/nexo)

## Template structure

The project is organized into two main directories: `api` and `frontend`.
Inside the `api` directory, you will find your app's authentication as well as our [Nuvemshop API](https://dev.nuvemshop.com.br/en/docs/developer-tools/nuvemshop-api) and integration with our product API. This integration allows for product creation, deletion, and listing.
Inside the `frontend` directory, you will find the visual layer of your app. In this space, integration with the API in the `api` directory occurs, allowing the visual part and backend logic to work together seamlessly.

## Clone this repository

```bash
git clone --recurse-submodules https://github.com/TiendaNube/tiendanube-app-native-template-node.git
```

## Installing template dependencies

Installing the API dependencies:

```bash
yarn setup:api
```

Installing the App dependencies:

```bash
yarn setup:frontend
```

## Running the API

Before proceeding with running the API, read the [README.md](https://github.com/TiendaNube/tiendanube-app-native-template-node/blob/main/api/README.md) in the api directory to understand more about the project's details and organization.

```bash
yarn start:api
```

and

```bash
yarn start:db
```

## Running the App

Before proceeding with running the app, read the [README.md](https://github.com/TiendaNube/tiendanube-app-native-template-react/blob/main/README.md) in the frontend directory to understand more about the project's details and organization.

```bash
yarn start:frontend
```

By default the application will run on the port `http://localhost:5173` but this can be easily changed by passing the port parameter to the above command.

```bash
yarn start:frontend --port 3000
```

## Licença

This repository is available as open-source under the terms of the MIT License. Be sure to review and comply with the license guidelines when using this code.
