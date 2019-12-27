

Vue.component('blue-item', {
    props: ['data'],
    template: '<li style="color: blue">{{ data }}</li>'
});
Vue.component('v-list',{
    template:'<div><ul v-for="item in items"> <blue-item :data="item.name"></blue-item> </ul></div>',
    data:function () {
        return{
            items:[
                {name:"Watch"},
                {name:"Phone"},
                {name:"Laptop"},
                {name:"Bag"}
            ]
        }
    }
});

Vue.component('child-comp',{
    template:'<div> <h2>Hi from child Elem</h2> ' +
        '<slot></slot>' +
        '</div>'
});
Vue.component('parent-comp',{
    template:'<child-comp><p>Hi from slot values</p></child-comp>'
});

Vue.component('v-table',{
    props:['header1','header2','content1','content2','content3','content4'],
    template:'<div> <table class="v-table"> ' +
        '<thead>' + '<td>{{header1}}</td>' + '<td>{{header2}}</td>' + '</thead>'+
        '<tbody>' + '<tr>'+ '<td>{{content1}}</td>' + '<td>{{content2}}</td>' + '</tr><tr>'+
        '<td>{{content3}}</td>' + '<td>{{content4}}</td>' + '</tr>'+
        '</tbody>'+ '</table>'+ '</div>'
});
Vue.component('my-table',{
    template:'<v-table :header1="headers[0].name" :header2="headers[1].name"' +
        ' :content1="content[0].data"  :content2="content[1].data"  :content3="content[2].data"' +
        ' :content4="content[3].data"></v-table>',
    data:function () {
        return{
            headers:[
                {name:'name'},
                {name:'age'}
            ],
            content:[
                {data:'sam'},
                {data:'90'},
                {data:'joy'},
                {data:'40'},
            ]
        }
    }
});
Vue.component('v-button',{
    template:'<button @click="fire" >Click Here to send data</button>',
    methods:{
        fire(){
           // alert("firing");
            this.$emit('changemessage',"V-button Fired");
        }
    }
});

app=new Vue({

    el:"#componentApp",
    data:{
        message:"Hello from SMB"
    },
    methods:{
        changeMessage(newvalue) {
            this.message = newvalue;
        }

    }

})