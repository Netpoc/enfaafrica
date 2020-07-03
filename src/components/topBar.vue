<template>

  <v-app-bar app height="80">
    
    <v-img src="@/assets/ENFA.png" max-width="150"></v-img>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="/">Home</v-btn>
            <v-btn text>Mission and Vision</v-btn>
            <v-btn text>Projects</v-btn>
            <v-btn text to="/Membership">Membership</v-btn>
            <v-btn text to="/Contact">Contact Us</v-btn>
            </v-toolbar-items>
    </v-toolbar-items>
    <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
    }
  }
}
</script>