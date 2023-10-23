

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<MaterialTheme theme={selectedTheme} colorScheme={selectedSchema}/>


<div class="box background background-text">

	<div class="surface surface-text">
		<a class="surface-text" href="/test/MWC">MWC</a> Some words
	</div>

	<div class="surface surface-text">
		<md-filled-text-field label="Label" value="">
		</md-filled-text-field>

		<md-outlined-text-field label="Label" value="">
		</md-outlined-text-field>

	</div>
	<div class="team-box surface surface-text">
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

	<div class="team-box">
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
	<div class="">
		<label>
			Material 3
			<md-checkbox checked></md-checkbox>
		</label>
	</div>
	<div class="">
		Index {i}
	</div>
	<div class="">
		<md-outlined-button on:click={decrementCounter}>Back</md-outlined-button>
		<md-filled-button on:click={incrementCounter} value="abcd">Next</md-filled-button>
	</div>

</div>


<style lang="scss">
	.box {

		display: grid;
		grid-gap: 5px;
		padding: 30px;
		max-height: 100%;
		justify-items: center;
		align-items: start;

		.nav {

			padding: 15px;
			border-radius: 3px;
		}
	}
</style>

<script lang="ts">
	import type {MdOutlinedSelect, MdSelectOption} from '@material/web/all';
	import MaterialTheme, {type Theme, type ColorScheme} from "$lib/material-theme/material-theme.svelte";

	import {apply,type Scheme, type Themes} from "$lib/material-theme/material-theme";

	let i = 0
	const incrementCounter = () => {
		i++
	}
	const decrementCounter = () => {
		i--
	}

	let selectedTheme:Themes = ""
	let selectedSchema:Scheme = ""
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
</script>
