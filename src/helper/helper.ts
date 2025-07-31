import { EnvironmentType } from "moj-common";

export function getLiferayAuthDetails() {
    return {
        accessToken: "",
        accessTokenUrl: "",
        refreshToken: "",
        refreshTokenUrl: "",
        accessTokenExpiryTime: 1234
    }
}

export function getLiferayEnvDetails() {
    return {
        environmentName: EnvironmentType.Production,
        liferayDeploymentUrl: "",
        liferayContract: undefined
    }
}