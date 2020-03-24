<template>
    <div class="muscu">
        <h1>musculature</h1>
        <button @click="csv()">oui</button>
    </div>
</template>

<script>
export default {
    name: 'muscu',
    methods:{
    csv(){
        var reader = new FileReader();

        reader.onload = function(e) {
            var text = reader.result;
        }
        let file = '../assets/musculation.csv'
        reader.readAsText(file, encoding);
        
 
        // Async / await usage
       //const jsonArray= csv().fromFile(csvFilePath);
    }
    }
}
</script>