class Cart {
          cartItems ;
          #localStorageKey ;

          constructor (localStorageKey){
                    this.#localStorageKey = localStorageKey;

                    this.#loadFromStorage();
          }
        
          #loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
            if (!this.cartItems) {
              this.cartItems = [
                {
                  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                  quantity: 2,
                  deliveryOptionId: '1'
                },
                {
                  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                  quantity: 1,
                  deliveryOptionId: '2'
                }
              ];
            }
          }
        
          saveToStorage() {
            localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
          }
        
          removeFromCart(productId) {
            const newCart = this.cartItems.filter(
              (cartItem) => cartItem.productId !== productId
            );
            this.cartItems = newCart;
            this.saveToStorage();
          }
        
          updateDeliveryOption(productId, deliveryOptionId) {
            const matchingItem = this.cartItems.find(
              (cartItem) => cartItem.productId === productId
            );
        
            if (matchingItem) {
              matchingItem.deliveryOptionId = deliveryOptionId;
              this.saveToStorage();
            }
          }
        }
        
        const cart = new Cart('cart-oop');
        
        
        