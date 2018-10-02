new Vue({
    el: "#app",
    data: {
        products: [
            {
                image: "https://via.placeholder.com/200x150",
                name: "PRODUCT ITEM NUMBER 1",
                description: "Description for product item number 1",
                price: 5.99,
                quantity: 1,
            },
            {
                image: "https://via.placeholder.com/200x150",
                name: "PRODUCT ITEM NUMBER 2",
                description: "Description for product item number 1",
                price: 9.99,
                quantity: 1,
            },
            {
                image: "https://via.placeholder.com/200x150",
                name: "PRODUCT ITEM NUMBER 3",
                description: "Description for product item number 1",
                price: 19.99,
                quantity: 1,
            },
            {
                image: "https://via.placeholder.com/200x150",
                name: "PRODUCT ITEM NUMBER 4",
                description: "Description for product item number 1",
                price: 29.99,
                quantity: 1,
            },
        ],
        tax: 5,   
        promotions: [
            {
                code: '29xgbuHa4O',
            discount: '0.5'
            },
            {
                code: 'mUxSnhywT1',
            discount: '0.4'
            },
            {
                code: 'nDdViZL4l3',
            discount: '0.3'
            }
        ],
        prcode:'',
        num:'',
    },
    
    methods: {
    
        productCount: function() {
            var sum = 0;
            for(i=0; i<this.products.length; i++) {
                sum += parseInt(this.products[i].quantity);
            }
            return sum;
        },

        subTotal: function() {
            var subMoney = 0;
            for(i=0; i<this.products.length; i++) {
                subMoney += parseFloat(this.products[i].price) * parseInt(this.products[i].quantity);
            }
            subMoney = Math.round(subMoney * 1000)/1000;
            return subMoney;
        },

        checkCode: function() {
            var dsct = 0;
            for(i=0; i< this.promotions.length; i++) {
                if(this.prcode === this.promotions[i].code) {
                    dsct = parseFloat(this.promotions[i].discount);
                } 
            } return dsct;
        },

        discountPrice: function() {
            return this.subTotal() * this.checkCode();
        },

        total: function() {
            return this.subTotal() - this.discountPrice() + this.tax;
        },

        remove: function(index) {
            this.products.splice(index, 1);
        },

        limit: function(index, event) {
            var content = event .target.value;
            var product = this.products[index];

            if(parseInt(content) < 1 ) {
                product.quantity = 1
            } else if (parseInt(content) > 100 ) {
                product.quantity = 100
            } else {
                product.quantity = content;
            }
            this.$set(this.products, index, product);
        }
    },

  });
  