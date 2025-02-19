
const FAQ: React.FC = () => {
    return(
       <div>
         <main className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-xl mt-2 mb-16">
            <section className="mb-2 bg-gradient-to-l from-green-50 via-yellow-50 to-darkgreen-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex justify-center align-center"><b>FAQ 's</b></h2>
            <section className=" bg-white m-12 p-6 rounded-lg shadow-md">
            <h1 className="text-xl text-emerald-400 flex justify-center">Frequently Asked Questions</h1>
               <details>
                  <summary>What types of dairy products do you offer?</summary>
                  <p>We offer a variety of fresh dairy products, including milk (whole, skim, and flavored), yogurt (plain and fruit flavors), cheese (cheddar, mozzarella, and our specialty farmstead cheeses), and butter. We also have seasonal items like ice cream and eggnog.</p>
               </details>

               <details>
                   <summary>Where is your farm located?</summary>
               <p>Our farm is located at Srungavarapukota. We welcome visitors!</p>
                    </details>

                <details>
                     <summary>How can I place an order?</summary>
                    <p>You can place an order directly through our website by browsing our online store and adding items to your cart. We also accept phone orders at bulk.</p>
                 </details>

                <details>
                    <summary>Do you offer delivery?</summary>
                    <p>Yes, we offer delivery to your areas. Our delivery fees are based on the location you order from.</p>
                </details>

                <details>
                   <summary>What is your return policy?</summary>
                   <p>Due to the perishable nature of our products, we generally do not accept returns. However, if you are unsatisfied with your order for any reason, please contact us within 1 days of receiving your order, and we will do our best to resolve the issue.</p>
                </details>
 
                 <details>
                    <summary>Are your products organic?</summary>
                   <p>Our farm is not certified organic, but we prioritize sustainable practices and the well-being of our animals.  We focus on traditional farming methods,responsible land management,high-quality feed to produce wholesome and delicious dairy products.  While we don't use synthetic pesticides or fertilizers, we are committed to natural pest control,soil health,animal care to ensure the quality and safety of our products.</p>
                 </details>

                <details>
                   <summary>How should I store your dairy products?</summary>
                   <p>All of our dairy products should be refrigerated to maintain freshness. Specific storage instructions may be included on the product packaging.</p>
                </details>

            </section>
            </section>
            </main>
            </div>
    )
}






































































export default FAQ;