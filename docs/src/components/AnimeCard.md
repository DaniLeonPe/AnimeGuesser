# AnimeCard

## Props

| Prop name    | Description                                                | Type                                                                                                | Values | Default |
| ------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------ | ------- |
| anime        | Objeto que contiene la información del anime.              | Object as () =&gt; {<br/> images: {<br/> jpg: {<br/> large_image_url: string;<br/> };<br/> };<br/>} | -      |         |
| correctTitle | El título correcto del anime que el usuario debe adivinar. | string                                                                                              | -      |         |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| newGame    |            |

---

# Components

Vue template files in this folder are automatically imported.

## 🚀 Usage

Importing is handled by [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components). This plugin automatically imports `.vue` files created in the `src/components` directory, and registers them as global components. This means that you can use any component in your application without having to manually import it.

The following example assumes a component located at `src/components/MyComponent.vue`:

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>

<script lang="ts" setup>
//
</script>
```

When your template is rendered, the component's import will automatically be inlined, which renders to this:

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>

<script lang="ts" setup>
import MyComponent from "@/components/MyComponent.vue";
</script>
```
