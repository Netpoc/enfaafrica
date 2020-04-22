<template>
  <v-app>
    <v-navigation-drawer
      width="200"
      v-model="drawer"
      color="#DEC227"
      absolute
      dark
      temporary
    >
      
      <v-list dense>
        <v-list-item-group >
          <v-list-item-icon>
            <v-icon> </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ma-1">
            <v-btn text to="/">Home </v-btn>
        <v-divider vertical></v-divider>
        <v-btn text to="/Team">The Team </v-btn>
        <v-divider vertical></v-divider>
        <v-btn text to="/Services">Our Services </v-btn>
        <v-divider vertical></v-divider>
        <v-btn text to="/Contact">Contact Us </v-btn>
          </v-list-item-content>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    
    <v-content>
      
      
        
    <router-view/>
      
    </v-content>
    <v-btn
      bottom
      color="green"
      dark
      fixed
      large
      right
      fab
      href="https://api.whatsapp.com/send?phone=2348118300383"
      target="_blank"
    >
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>

    <v-footer
      app
      absolute
      padless
      inset
      tile
      >
<v-card width="100%" color="#4D4D4D" dark>
  <v-row align="center">
    <v-col>
        <v-btn
        icon
        >
          <v-icon size="24px">mdi-twitter </v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn
        icon
        >
          <v-icon size="24px">mdi-facebook </v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn
        icon
        >
          <v-icon size="24px">mdi-linkedin </v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn
        icon
        >
          <v-icon size="24px">mdi-instagram </v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn
        icon
        href="https://api.whatsapp.com/send?phone=2348118300383"
        >
          <v-icon size="24px">mdi-whatsapp</v-icon>
        </v-btn>

      <br>


        &copy; {{ new Date().getFullYear() }} | <strong>Netpoc Inc.</strong>
    </v-col>
  </v-row>
</v-card>

    
  
    </v-footer>
    
  </v-app>
 
</template>



<script>
export default {
  data() {
    return {
      drawer: null,

    }
  },
  watch: {
        '$route' (to) {
          document.title = to.meta.title || 'Netpoc Inc.'
        }
      },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
