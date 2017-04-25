import resolveScriptName from './resolve-script-name'

const testScriptConfig = {
  foo: {
    bar: {
      baz: 'echo "foo.bar.baz"',
    },
  },
  qux: {
    default: 'echo "default foo.bar.baz"',
    foo: {
      bar: 'echo "qux.foo.bar"',
    },
  },
}

test('should return correct key for given value', () => {
  const commandToFind = 'echo "qux.foo.bar"'
  const scriptName = resolveScriptName(commandToFind, testScriptConfig)
  expect(scriptName).toBe('qux.foo.bar')
})
