react-selectall
===============

[![Build Status](https://travis-ci.org/keul/react-selectall.svg?branch=master)](https://travis-ci.org/keul/react-selectall)
[![Dependencies](https://img.shields.io/david/keul/react-selectall.svg)]()
[![Dev Dependencies](https://img.shields.io/david/dev/keul/react-selectall.svg)]()

ReactJS component for selecting text easily.

Demo
----

A demo is located inside `src/demo` directory, here you can test your library while developing.

Tu run the demo locally, clone the repository and type:

```
npm install
npm run
```

Then open `localhost:8000` in a browser.

Installation
------------

Install from npm:

```
npm install react-selectall --save
```

Usage
-----

The simplest use is to wrap your subcomponents or subelements inside a `SelectAll` container:

```jsx
import SelectAll from 'react-selectall';

<SelectAll>
  <div>Foo bar baz</div>
  <CustomComponent>qux tux</CustomComponent>
</SelectAll>
```

When you will double-click on the rendered container, all of the text inside will be selected.

### Change activation event

By default the select-all activation event is a double-click.

You can change it to a single click customizing the `selectOn`:

```jsx
import SelectAll from 'react-selectall';

<SelectAll selectOn="onClick">
  <div>Foo bar baz</div>
  <CustomComponent>qux tux</CustomComponent>
</SelectAll>
```

### Copy to clipboard

The most common usage of a selected text is to copy it.

You can save the user from doing the copy operation itself by activating the `toClipboard` prop:

```jsx
import SelectAll from 'react-selectall';

<SelectAll toClipboard>
  <div>Foo bar baz</div>
  <CustomComponent>qux tux</CustomComponent>
</SelectAll>
```

**Please note**: copy to clipboard can not be supported by every browser.

Plus: some versions of Internet Explorer ask explicitly a confirmation to the user.

### Copy event

Still you can be interested in doing other operations with the selected text.

You can then pass an event handler function to the `onSelect: prop

```jsx
import SelectAll from 'react-selectall';

<SelectAll onSelect={handleSelect}>
  <div>Foo bar baz</div>
  <CustomComponent>qux tux</CustomComponent>
</SelectAll>
```

The `handleSelect` receive following parameters:

* `ev` - the event who triggered the action
* `text` - the selected text
* `toClipboard` - a boolean value, true if the selection has been successfully copied to clipboard.

### Subelements

By default a `SelectAll` component wrap what it contains in a single selection block.

But You can move the selection behavior to childrens:

```jsx
import SelectAll from 'react-selectall';

<SelectAll childSelection>
  <div>Foo bar baz</div>
  <CustomComponent>qux tux</CustomComponent>
</SelectAll>
```

In that case the selection take place when acting on DOM nodes contained inside the `SelectAll` component.

Please note: this will also affects other properties like `onSelect`, `selectOn`, `toClipboard`.
