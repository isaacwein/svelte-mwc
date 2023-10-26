<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<MaterialTheme theme={selectedTheme} colorScheme={selectedSchema}/>


<div class="wrapper background background-text">
    <div class="box theme-picker">
        <md-slider class="color-picker" labeled min="0" max="255" value="50"></md-slider>
        <div class="color-display-wrapper">
            <div id="gradient" class="color-display"></div>
        </div>

        <md-slider class="chroma-picker" labeled min="0" max="150" value="50"></md-slider>
        <div class="tone-display-wrapper">
            <div class="tone-display"></div>
        </div>
        <md-slider class="tone-picker" labeled min="0" max="100" value="50"></md-slider>
        <div class="tone-display-wrapper">
            <div class="tone-display"></div>
        </div>
    </div>
    <div class="box surface surface-text">
        <a class="surface-text" href="/test/MWC">MWC</a> Some words
    </div>
    <div class="box progressers">
        <div class="">
            <md-circular-progress four-color indeterminate></md-circular-progress>
        </div>

        <md-linear-progress four-color indeterminate></md-linear-progress>
        <md-linear-progress value="0.5" buffer="0.8"></md-linear-progress>
    </div>
    <div class="box surface surface-text">
        <md-filled-text-field label="Label" value="">
        </md-filled-text-field>

        <md-outlined-text-field label="Label" value="">
        </md-outlined-text-field>

    </div>
    <div class="box team-box surface surface-text">
        <!-- value="" just for Initialization -->
        <md-filled-select value="" on:change={teamSelectChanged} required>
            <md-select-option value="" selected>
                <div slot="headline">Default</div>
            </md-select-option>
            <md-select-option value="blue">
                <div slot="headline">Blue</div>
            </md-select-option>
            <md-select-option value="purple">
                <div slot="headline">Purple</div>
            </md-select-option>
            <md-select-option value="red">
                <div slot="headline">red</div>
            </md-select-option>
        </md-filled-select>
    </div>

    <div class="box team-box">
        <!-- value="" just for Initialization -->
        <md-filled-select desabled value="" on:change={schemaSelectChanged} required>
            <md-select-option value="" selected>
                <div slot="headline">Default</div>
            </md-select-option>
            <md-select-option value="dark">
                <div slot="headline">Dark</div>
            </md-select-option>
            <md-select-option value="light">
                <div slot="headline">Light</div>
            </md-select-option>
        </md-filled-select>
    </div>
    <div class="box">
        <label>
            Material 3
            <md-checkbox checked></md-checkbox>
        </label>
        <div class="">
            Index {i}
        </div>
        <div class="">
            <md-outlined-button on:click={decrementCounter}>Back</md-outlined-button>
            <md-filled-button on:click={incrementCounter} value="abcd">Next</md-filled-button>
        </div>
    </div>

    <div class="box">
        Dialog
        <md-outlined-button on:click={() => {
myDialog.show()
        }}>Open
        </md-outlined-button>


    </div>
</div>

<md-dialog bind:this={myDialog}>
    <div slot="headline">
        Dialog title
    </div>
    <form slot="content" bind:this={formId} on:submit|preventDefault={myDialog.close()}>
        A simple dialog with free-form content.
    </form>
    <div slot="actions">
        <md-text-button on:click={formId.requestSubmit()}>Ok</md-text-button>
    </div>
</md-dialog>

<style lang="scss">
  .wrapper {
    .box {
      border-radius: 25px;
      padding: 36px;
      width: 100%;
      height: 100%;
      border: solid 2px #fff;
    }

    display: grid;
    grid-gap: 25px;
    padding: 30px;
    max-height: 100%;
    justify-items: center;
    align-items: start;

    .theme-picker {
      width: 100%;

      .color-picker {
        width: 100%;
      }

      .color-display-wrapper {
        padding: 0 16px 16px;

        .color-display {
          height: 10px;
          border-radius: 10px;
          background: linear-gradient(to right, #e7007d 0%, #e90070 1%, #ea0064 2%, #eb0057 3%, #ec044a 4%, #ec0e3d 5%,
                  #eb162f 6%, #ea1c1f 7%, #e92207 8%, #e03400 9%, #d84200 10%,
                  #d04b00 11%, #ca5100 12%, #c45600 13%, #bf5b00 14%, #ba5e00 15%,
                  #b56100 16%, #b16400 17%, #ad6600 18%, #a96800 19%, #a56a00 20%,
                  #a26c00 21%, #9e6e00 22%, #9b7000 23%, #977100 24%, #937300 25%,
                  #907400 26%, #8c7600 27%, #887700 28%, #847800 29%, #7f7a00 30%,
                  #7a7b00 31%, #757d00 32%, #6f7e00 33%, #698000 34%, #618200 35%,
                  #588300 36%, #4c8500 37%, #3d8700 38%, #238a00 39%, #008b18 40%,
                  #008a2f 41%, #008a3d 42%, #008948 43%, #008951 44%, #008858 45%,
                  #00885f 46%, #008865 47%, #00876a 48%, #00876f 49%, #008673 50%,
                  #008677 51%, #00867b 52%, #00857f 53%, #008583 54%, #008586 55%,
                  #00848a 56%, #00848d 57%, #008491 58%, #008394 59%, #008398 60%,
                  #00829c 61%, #00829f 62%, #0081a3 63%, #0081a7 64%, #0080ac 65%,
                  #007fb1 66%, #007fb6 67%, #007ebb 68%, #007dc1 69%, #007bc8 70%,
                  #007ad0 71%, #0078da 72%, #0075e5 73%, #0072f2 74%, #126eff 75%,
                  #326bff 76%, #4568ff 77%, #5365ff 78%, #5f62ff 79%, #695fff 80%,
                  #735bff 81%, #7d57ff 82%, #8653ff 83%, #8e4eff 84%, #9748ff 85%,
                  #a040ff 86%, #aa37ff 87%, #b329ff 88%, #be0dff 89%, #c400f6 90%,
                  #ca00ea 91%, #ce00de 92%, #d300d2 93%, #d600c6 94%, #da00ba 95%,
                  #dd00ad 96%, #e000a1 97%, #e20095 98%, #e50089 99%);
        }

      }

      .chroma-picker {
        width: 100%;
      }

      .tone-picker {
        width: 100%;
      }

      .tone-display-wrapper {
        padding: 0 16px 16px;

        .tone-display {
          height: 10px;
          border-radius: 10px;
          background: linear-gradient(to right, #000000, #ffffff);

        }
      }

    }

    .progressers {
      width: 100%;
      display: grid;
      grid-gap: 15px;
      justify-items: center;

      md-linear-progress {
        width: 100%;
      }
    }

    .nav {

      padding: 15px;
      border-radius: 3px;
    }
  }
</style>

<script lang="ts">
    import type {MdOutlinedSelect, MdSelectOption, MdDialog} from '@material/web/all';
    import MaterialTheme, {type Theme, type ColorScheme} from "$lib/material-theme/material-theme.svelte";

    import {apply, type Scheme, type Themes} from "$lib/material-theme/material-theme";


    let i = 0
    const incrementCounter = () => {
        i++
    }
    const decrementCounter = () => {
        i--
    }

    let selectedTheme: Themes = ""
    let selectedSchema: Scheme = ""
    const teamSelectChanged = (e: Event) => {

        selectedTheme = (e.target as MdOutlinedSelect)?.value as Themes
        apply(selectedTheme, selectedSchema)
        console.log(selectedTheme, selectedSchema);
    }

    const schemaSelectChanged = (e: Event) => {
        // @ts-ignore
        selectedSchema = (e.target as MdOutlinedSelect)?.value as Scheme
        apply(selectedTheme, selectedSchema)
        console.log(selectedTheme, selectedSchema);
    }

    let formId: HTMLFormElement;
    let myDialog: MdDialog;
</script>
