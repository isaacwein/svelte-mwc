<script>



    import '@material/web/all.js';
    import './styles.css';
    import Header from './Header.svelte';


</script>

<div class="app background background-text">
    <Header/>

    <main>
        <slot/>
    </main>

    <footer>
        <p>visit </p>
    </footer>
</div>

<style lang="scss">
  .app {
    display: grid;
    grid-auto-flow: row;
    height: 100%;

    footer {
      height: min-content;
    }
  }

</style>
