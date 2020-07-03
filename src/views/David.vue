<template>
<v-container fluid>
    <v-app-bar color="#009013">
        <v-img src="@/assets/Africa.png" height="100" contain></v-img>
       
      <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="/">Home</v-btn>
            <v-btn text>Mission and Vision</v-btn>
            <v-btn text>Projects</v-btn>
            <v-btn text to="/Membership">Membership</v-btn>
            <v-btn text to="/Contact">Contact Us</v-btn>
            </v-toolbar-items>
    
         </v-app-bar>   
<v-row>
    <v-col md="4">
        <v-card height="300">
            <p class="display-2">Heading</p>
            <p>hjdfhjfsgfjhsgfkgskj sfhjfkhjfjsf sf dfhjdfasgfdhjkas fasfdhaksdgf </p>
            <v-btn>Hello</v-btn>
        </v-card>
    </v-col>
    <v-col md="8">
        <v-card>
            <v-img src="@/assets/sculpt.png" height="300" contain></v-img>
        </v-card>
    </v-col>
</v-row>
</v-container>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>