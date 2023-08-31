import { getContentItem, getContentItemFromConfigLocator } from "./amplience"
import { CONSTANTS } from "./constants"

export async function getConfig(config_locator: string) {
    const [hub, _] = config_locator.split(':')
    let config = await getContentItemFromConfigLocator(config_locator)
    return config;
}

export async function getApiConfig(config_locator: string) {
    const [hub, _] = config_locator.split(':')
    let config = await getContentItemFromConfigLocator(config_locator)
    if (config._meta.schema === CONSTANTS.demostoreConfigUri) {
        config = await getContentItem(hub, config.commerce)
    }

    // HACK: remove when the configuration type includes the `vendor` property.
    if (config.site_id === 'RefArchGlobal') {
        config.vendor = 'sfcc';
    }

    return config;
}