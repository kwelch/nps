import {get} from 'lodash'

export default resolveScriptName

function resolveScriptName(scriptToFind, scriptsConfig) {
  let result = []

  function internalResolveScriptName(script, config, properties = []) {
    Object.keys(config).some(scriptKey => {
      properties.push(scriptKey)
      const property = properties.join('.')
      const currentValue = get(scriptsConfig, property)
      if (typeof currentValue === 'object') {
        internalResolveScriptName(script, currentValue, properties)
      }
      if (typeof currentValue === 'string' &&
        currentValue === script) {
        result = [...properties]
        return true
      } else {
        properties.pop()
        return false
      }
    })
  }
  internalResolveScriptName(scriptToFind, scriptsConfig)
  return result.join('.')
}
