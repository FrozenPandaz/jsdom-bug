# Run

```bash
pnpm i
```

## Error

```shell
~/p/t/jsdom-bug (master|✔) $ pnpm test

> jsdom-bug@1.0.0 test /home/jason/projects/triage/jsdom-bug
> jest

(node:14399) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
FAIL  ./test.spec.js
    jsdom
        ✕ should select (4 ms)

    ● jsdom › should select

        SyntaxError: 'h1' is not a valid selector

            2 |     it('should select', () => {
            3 |         const div = document.createElement('div');
        > 4 |         const none = div.querySelector('h1');
                |                          ^
            5 |         expect(none).toBeUndefined();
            6 |     })
            7 | })

            at emit (node_modules/.pnpm/nwsapi@2.2.8/node_modules/nwsapi/src/nwsapi.js:557:17)
            at _querySelectorAll (node_modules/.pnpm/nwsapi@2.2.8/node_modules/nwsapi/src/nwsapi.js:1501:9)
            at Object._querySelector [as first] (node_modules/.pnpm/nwsapi@2.2.8/node_modules/nwsapi/src/nwsapi.js:1412:14)
            at HTMLDivElementImpl.querySelector (node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/nodes/ParentNode-impl.js:69:44)
            at HTMLDivElement.querySelector (node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/Element.js:1094:58)
            at Object.querySelector (test.spec.js:4:26)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.42 s, estimated 1 s
Ran all test suites.
 ELIFECYCLE  Test failed. See above for more details.
```

## Version

```shell
~/p/t/jsdom-bug (master|✔) $ pnpm ls nwsapi --depth 3
Legend: production dependency, optional only, dev only

jsdom-bug@1.0.0 /home/jason/projects/triage/jsdom-bug

devDependencies:
jest-environment-jsdom 29.7.0
└─┬ jsdom 20.0.3
└── nwsapi 2.2.8
```