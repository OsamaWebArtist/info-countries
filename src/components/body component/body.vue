<template>
    <div :class="{ 'body-darkmode': getDarkMode }" class="bodyweb w-auto p-3">
        <div class="container">
            <div class='inputs'>
                <div class="search-p">
                    <input :class="{ 'head-darkmode': getDarkMode }" type="search" v-model="search"
                        placeholder="Search for a country">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <select :class="{ 'head-darkmode': getDarkMode }" name="" v-model="selected">
                    <option class="opts" value="" selected>Filter By Region</option>
                    <option class="opts" value="Africa">Africa</option>
                    <option class="opts" value="America">America</option>
                    <option class="opts" value="Asia">Asia</option>
                    <option class="opts" value="Europe">Europe</option>
                    <option class="opts" value="Oceania">Oceania</option>
                </select>
            </div>

            <div class="all-countries">

                <div :class="{ 'head-darkmode': getDarkMode }" class="countrie" v-for="info in filterAllCountries"
                    :key="info">

                    <router-link :to="{
                        name: `countrieInfo`,
                        params: { countrieName: info.name, }
                    }">

                        <a href=""><img :src="info.flags.png" alt=""></a>
                    </router-link>

                    <div class="info-count">
                        <h4>{{ info.name }}</h4>
                        <div class="extra-info">
                            <span class="quick-info"><span>Population</span> : {{ info.population }}</span>
                            <span class="quick-info"><span>Region</span> : {{ info.region }}</span>
                            <span class="quick-info"><span>Capital</span> : {{ info.capital }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
    
<script>
import jsonInfo from "../../../public/data.json";

export default {
    name: 'myBody',
    data() {
        return {
            search: '',
            selected: '',
            infos: jsonInfo,
            backStyle: {
                backgroundColor: 'var(--Dark-Blue-DarkModeElements)',
            },
        }
    },
    computed: {
        filterAllCountries() {

            return this.infos.filter(info => info.region.includes(this.selected)).filter(info => info.name.toLowerCase().includes(this.search.toLowerCase()))
            /*this.infos.*/
        },
        getDarkMode() {
            return this.$store.state.darkMode
        }
    },

}




</script>

<style scoped lang="scss"></style>



