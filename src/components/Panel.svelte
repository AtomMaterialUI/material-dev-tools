<script>
  import { app } from '~store/store.ts';
  import { blur } from 'svelte/transition';
  import ThemeSwitcher from '~components/ThemeSwitcher.svelte';
  import Footer from '~components/Footer.svelte';
</script>

<style lang='scss'>
  .alert {
    position: absolute;
    z-index: 3;
    width: 100%;
    min-width: 24rem;
    height: 3.5rem;
    padding: 0.625rem 0;
    background-color: var(--accent);
    color: var(--selFg);
    text-align: center;
    font-size: 0.875rem;
    transition: all 0.25s ease;
    animation: fadeInDown 0.75s cubic-bezier(.55, 0, .1, 1) both 1s;
  }

  .container {
    padding-top: 2.5rem;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: [content] 100% [footer] 32px;
    grid-template-areas:
        'content'
        'footer';
  }
</style>

{#if $app.notifying === true}
  <div class='alert' transition:blur='{{amount: 10}}'>
    Close and reopen DevTools to apply your changes!<br>
    <strong>Do not forget to change the theme to Light or Dark according to your selected theme!</strong>
  </div>

{/if}

<div class='container'>
  <ThemeSwitcher />

  <Footer />
</div>
