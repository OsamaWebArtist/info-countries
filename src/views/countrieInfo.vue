<template>

    

<div :class="{'body-darkmode' : getDarkMode}" class="countries">
    <myHead/>
    <div class="countrie-infos">
        <div class="container">
        <div :class="{'head-darkmode' : getDarkMode}" @click="goBack()" class="go-back"><span>&#8592;</span><span>Back</span></div>
        <div class="details row">
            <div class="flag col-lg row-md">
                <img :src="countrieDetails[0].flags.png" alt="">
            </div>
            <div class="info col-lg row-md " >
                <div class="the-name row "><h2 >{{ countrieDetails[0].name }}</h2></div>
                <div class="all-info row">
                    <div class="info-1 col-lg row-md">
                        <div class="info-details"><span>Native Name :</span> <span>{{ countrieDetails[0].nativeName }}</span></div>
                        <div class="info-details"><span>Population :</span> <span>{{ countrieDetails[0].population }}</span></div>
                        <div class="info-details"><span>Region :</span> <span>{{ countrieDetails[0].region }}</span></div>
                        <div class="info-details"><span>Sub Region :</span> <span>{{ countrieDetails[0].subregion }}</span></div>
                        <div class="info-details"><span>Capital :</span> <span>{{ countrieDetails[0].capital }}</span></div>

                    </div>
                    <div class="info-2 col-lg row-md">
                        <div class="info-details"><span>Top Level Domain :</span> <span>{{ countrieDetails[0].topLevelDomain[0] }}</span></div>
                        <div class="info-details"><span>Currencies :</span> <span>{{ countrieDetails[0].currencies[0].name }}</span></div>
                        <div class="info-details"><span>Languages :</span> <span v-for="lang in countrieDetails[0].languages">{{ lang.name }} , </span></div>
                    </div>
                    <div class="border-count row">
                        <div class="countri-bord">
                                                <span>Border Countries</span> : 
                                                <span :class="{'head-darkmode' : getDarkMode}" class="bord" v-for="border in countrieDetails[0].borders">{{ border }}</span> 
                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</template>

<script>
import getCountrieInfo from '../../public/data.json'
import head from '@/components/head component/head.vue'
export default {
    name: 'countrieInfo',
    data() {
        return {
            countrieInfo: getCountrieInfo,
            countrieName: this.$route.params.countrieName,

        }
    },
    methods: {
        goBack() {
            this.$router.push({name:`HomeView`})
        }
    },
    computed: {
        countrieDetails() {
            let arrCountrie = [];
            for (let i = 0; i < this.countrieInfo.length;i++){
                if (this.countrieInfo[i].name === this.countrieName) {
                    arrCountrie.push(this.countrieInfo[i]);
                    break;
                }
            }
            return arrCountrie;
        },
        getDarkMode() {
        return this.$store.state.darkMode 
        },

    },
    components: {
        myHead: head,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>