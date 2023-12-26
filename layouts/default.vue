<!-- Unlike other components, your layouts must have a single root element 
    to allow Nuxt to apply transitions between layout changes - 
    and this root element cannot be a <slot />. -->
<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
