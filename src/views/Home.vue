<template>
	<v-app id="sandbox">
		<v-navigation-drawer
			v-model="primaryDrawer.model"
			:clipped="primaryDrawer.clipped"
			:floating="primaryDrawer.floating"
			:mini-variant="primaryDrawer.mini"
			:permanent="primaryDrawer.type === 'permanent'"
			:temporary="primaryDrawer.type === 'temporary'"
			app
			overflow
		>
			<v-img
				src="https://cdn.vuetifyjs.com/images/lists/ali.png"
				height="160px"
				dark
			>
				<v-row class="fill-height">
					<v-card-title>
						<v-btn dark icon>
							<v-icon>mdi-chevron-left</v-icon>
						</v-btn>
						<v-btn dark icon class="mr-4">
							<v-icon>mdi-pencil</v-icon>
						</v-btn>
					</v-card-title>

					<v-card-title class="white--text pl-12 pt-2">
						<div class="display-1 pl-12 pt-12">Ali Conners</div>
					</v-card-title>
				</v-row>
			</v-img>
			<v-divider></v-divider>
			<v-list
				nav
				dense
			>
				<v-list-item-group v-model="item" color="primary">
					<v-list-item
						v-for="(item, i) in items"
						:key="i"
					>
						<v-list-item-icon>
							<v-icon v-text="item.icon"></v-icon>
						</v-list-item-icon>

						<v-list-item-content @click="goRoute(item.text)">
							<v-list-item-title v-text="item.text"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar
			:clipped-left="primaryDrawer.clipped"
			app
		>
			<v-app-bar-nav-icon
				v-if="primaryDrawer.type !== 'permanent'"
				@click.stop="primaryDrawer.model = !primaryDrawer.model"
			/>
			<v-toolbar-title>Vuetify</v-toolbar-title>
		</v-app-bar>

		<v-content>
			<v-container fluid>
				<router-view/>
			</v-container>
		</v-content>

		<v-footer
			:inset="footer.inset"
			app
		>
			<span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
  export default {
    data: () => ({
      footer: {
        inset: false,
      },
      dialog: false,
      drawer: null,
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      items: [
        { icon: 'mdi-contacts', text: 'about' },
        { icon: 'mdi-history', text: 'Frequently contacted' },
        { icon: 'mdi-content-copy', text: 'Duplicates' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-cellphone-link', text: 'App downloads' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-help-circle', text: 'Help' },
      ],
    }),
		methods:{
      goRoute:function(routeName){
        this.$router.push("/"+ routeName.toLowerCase());
			}
		}
  }
</script>
