<template>
    <v-container fluid>
        <topBar />
        <p class="display-2">Contact Us</p>
        <v-row>
            <v-col md="4">
                <v-form>
                    <v-text-field label="Full Name">
                    </v-text-field>
                    <v-text-field label="Email">
                    </v-text-field>
                    <v-text-field label="Phone">
                    </v-text-field>
                    <v-text-field label="Subject">
                    </v-text-field>
                    <v-textarea rows="3" label="Message goes here...">
                    </v-textarea>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import topBar from '@/components/topBar.vue'
export default {
  components: {
    topBar,
  }
}
</script>
