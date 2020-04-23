<template>
  <v-container fluid>
    <v-row align="center">
      <v-col md="4">
        <v-img src="@/assets/ENFA.png" max-width="350"></v-img>
      </v-col>
      <v-spacer />
      <v-col cols="auto" align-self="center" justify="end">
        <v-toolbar flat>
            <v-toolbar-items class="hidden-sm-and-down">
            <v-spacer></v-spacer>
            <v-btn text to="/">Home</v-btn>
            <v-btn text>Mission and Vision</v-btn>
            <v-btn text>Projects</v-btn>
            <v-btn text to="/Membership">Membership</v-btn>
            <v-btn text>Contact Us</v-btn>
            </v-toolbar-items>
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </v-toolbar>
      </v-col>
    </v-row>
    <v-row class="mt-5" align="center" justify-md="space-around">
      <v-col cols="auto">
      <v-tabs vertical>
      <v-tab>
        <strong>Proud</strong>
      </v-tab>
      <v-tab>
        <strong>Jealous</strong>
        
      </v-tab>
      <v-tab>
       <strong>Resolved</strong>
        
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-row align="start" justify="space-around">
              <v-col md="6" align-self="center">
                Proud of our Pan-African, an enriching feature of our Pan-African identity, 
                but profoundly aware of the imperative need to further consolidate our unity 
                and identity, solemnly declare that we constitute one and the same believe, 
                bound by the same destiny and assert our firm determination to build the 
                African community on the basis of the ideals of advocacy,policy development,
                 ethical leadership and accountability.
              </v-col>
            <v-col md="4" align-self="start">
            <v-img src="@/assets/sculpt.png" max-height="400" contain></v-img>
            </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-row align="start" justify="space-around">
              <v-col md="6" align-self="center">
                Jealous of our hard-won spirit of unity and resolved to preserve 
                same, convinced that the growth and development of Africa lies 
                in the forging ever growing bonds of solidarity among African 
                people, affirm our desire to contribute to the advent of a developed 
                Ethical African leadership/advocacy framework, while maintaining peace, 
                human rights,social justice,good governance and brotherly relations 
                with the other communities of the world.
              </v-col>
            <v-col md="4" align-self="start">
            <v-img src="@/assets/family.png" max-height="400" contain></v-img>
            </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-row align="start" justify="space-around">
              <v-col md="6" align-self="center">
                Resolved to establish an International Civil Society 
                Organization in order to ensure the well-being of every 
                African indigene without discrimination, to devote all 
                our efforts to that end, declare our readiness to cooperate 
                with all stakeholders that desire to participate in this 
                leadership/advocacy program.
              </v-col>
            <v-col md="4" align-self="start">
            <v-img src="@/assets/mask1.png" max-height="400" contain></v-img>
            </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
      </v-col>
    </v-row>
    <v-divider class="ma-5"></v-divider>
    <v-row align="center" justify="center">
      <p class="display-2">Our Values</p>
    </v-row>
    <v-row justify="space-around">
      <v-col md="3">
        <v-img src="@/assets/strength.png" max-height="400" contain></v-img>
      </v-col>
      <v-col md="8" class="text-justify">
        <ul>
          <li>
           MUTUAL RESPECT,<br> requiring them to recognize the 
           innate worth of all people and the value of diversity
          </li>
          <li>
            EQUITY AND JUSTICE,<br> requiring them to work to ensure equal 
            opportunity for everyone, irrespective of race, age, 
            gender, sexual orientation, HIV status, color, 
            class, ethnicity, disability, location or religion
          </li>
          <li>
            HONESTY AND TRANSPARENCY,<br> being accountable at all levels 
            for the effectiveness of their actions and open in their 
            judgments and communications with others
          </li>
          <li>
            SOLIDARITY WITH THE POOR, POWERLESS AND EXCLUDED<br> shall 
            be the only bias in their commitment to the fight against poverty
          </li>
          <li>
            COURAGE OF CONVICTION,<br> requiring them to be creative and radical, 
            bold and innovative  without fear of failure  in pursuit of making 
            the greatest possible impact on the causes of poverty
          </li>
          <li>
            INDEPENDENCE from any religious or party-political affiliation
          </li>
          <li>
            HUMILITY in their presentation and behavior, recognizing that they are 
            part of a wider alliance against poverty.
          </li>
        </ul>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,

    }
  },
  
}
</script>