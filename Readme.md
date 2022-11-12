<h1 align="center">🌛 سبحان الله وبحمده، والحمد لله، ولا إله إلا الله، والله أكبر 🌜</h1>
<h1 align="center">Mohamed ELYOUSFI</h1>
<h3 align="center"><💻 Mise en oeuvre d'une architecture Micro-Services (consul) 💻/></h3><br><br>

<div>
    <p> 
        <h5>📌 Démarrage du consul</h5>
        <img src="./images/Screenshot_1.png" width="700">
        <img src="./images/Screenshot_2.png" width="700">
        <h5>📌 Configuration Service</h5>
        <img src="./images/Screenshot_3.png" width="700">
        <h5>📌 Configuration Repository</h5>
        <p>un repository git qui contient les fichiers de configuration de l'application</p>
        <img src="./images/Screenshot_8.png" width="700">
        <h5>📌 Configuration du customer-service default/dev/prod</h5>
        <img src="./images/Screenshot_4.png" width="700">
        <img src="./images/Screenshot_5.png" width="700">
        <img src="./images/Screenshot_6.png" width="700">
        <p>c'est la même chose pour les autres services</p>
        <h5>📌 Configuration du config-service</h5>
        <p>pour que le config-service puisse accéder au repository git</p>
        <img src="./images/Screenshot_9.png" width="700">
        <h5>📌 Aprés démarrage - config service</h5>
        <p>on peut voir que le config-service est enregistré dans le consul</p>
        <img src="./images/Screenshot_10.png" width="700">
        <p>Default configuration du customer-service</p>
        <img src="./images/Screenshot_11.png" width="700">
        <p>Configuration dev du customer-service</p>
        <img src="./images/Screenshot_12.png" width="700">
        <p>Configuration prod du customer-service</p>
        <img src="./images/Screenshot_13.png" width="700">
        <h5>📌 Test de la configuration de customer-service</h5>
        <img src="./images/Screenshot_14.png" width="700">
        <p>Controlleur de test</p>
        <img src="./images/Screenshot_16.png" width="700">
        <h5>📌 Aprés démarrage - customer service</h5>
        <img src="./images/Screenshot_17.png" width="700">
        <p>Récupération des paramètres de configuration</p>
        <img src="./images/Screenshot_18.png" width="700">
        <p>Pour une configuration a chaud, il faut faire un refresh du config-service, pour que le customer-service puisse récupérer les nouvelles configurations, et pour cela on utilise refresh actuator</p>
        <h5>📌 Changement de configuration</h5>
        <img src="./images/Screenshot_19.png" width="700">
        <img src="./images/Screenshot_20.png" width="700">
        <h5>📌 Aprés refresh</h5>
        <img src="./images/Screenshot_21.png" width="700">
        <img src="./images/Screenshot_22.png" width="700">
        <details>
        <summary style="font-size:15px;cursor:pointer">📌 1. CUSTOMER-SERVICE (Click to expand 🖱)</summary>
        <h5>Entity Customer</h5>
        <img src="./images/Screenshot_23.png" width="700">
        <h5>Repository CustomerRepository</h5>
        <img src="./images/Screenshot_24.png" width="700">
        <h5>Données de test</h5>
        <img src="./images/Screenshot_25.png" width="700">
        <img src="./images/Screenshot_26.png" width="700">
        </details>
        <details>
        <summary style="font-size:15px;cursor:pointer">📌 2. GATEWAY-SERVICE (Click to expand 🖱)</summary>
        <h5>Bean de configuration</h5>
        <img src="./images/Screenshot_27.png" width="700">
        <h5>Configuration de la Gateway</h5>
        <img src="./images/Screenshot_28.png" width="700">
        <h5>Aprés démarrage - gateway service</h5>
        <img src="./images/Screenshot_29.png" width="700">
        <h5>Test de la gateway</h5>
        <img src="./images/Screenshot_30.png" width="700">
        <img src="./images/Screenshot_31.png" width="700">
        <h5>Projection - fullCustomer</h5>
        <img src="./images/Screenshot_42.png" width="700">
        <img src="./images/Screenshot_43.png" width="700">>
        </details>
        <details>
        <summary style="font-size:15px;cursor:pointer">📌 3. INVENTORY-SERVICE (Click to expand 🖱)</summary>
        <h5>Entity Product</h5>
        <img src="./images/Screenshot_32.png" width="700">
        <h5>Repository ProductRepository</h5>
        <img src="./images/Screenshot_33.png" width="700">
        <h5>Données de test</h5>
        <img src="./images/Screenshot_34.png" width="700">
        <h5>Configuration</h5>
        <img src="./images/Screenshot_35.png" width="700">
        <img src="./images/Screenshot_36.png" width="700">
        <h5>Aprés démarrage - inventory service</h5>
        <img src="./images/Screenshot_37.png" width="700">
        <h5>Test de l'inventory service</h5>
        <img src="./images/Screenshot_38.png" width="700">
        <img src="./images/Screenshot_39.png" width="700">
        <h5>Projection - fullProduct</h5>
        <img src="./images/Screenshot_40.png" width="700">
        <img src="./images/Screenshot_41.png" width="700">
        </details>
        <details>
        <summary style="font-size:15px;cursor:pointer">📌 4. ORDER-SERVICE (Click to expand 🖱)</summary>
        <h5>Entity Order</h5>
        <img src="./images/Screenshot_44.png" width="700">
        <img src="./images/Screenshot_45.png" width="700">
        <h5>Entity ProductItem</h5>
        <img src="./images/Screenshot_46.png" width="700">
        <h5>Class Customer</h5>
        <img src="./images/Screenshot_48.png" width="700">
        <h5>Class Product</h5>
        <img src="./images/Screenshot_47.png" width="700">
        <h5>Repository OrderRepository</h5>
        <img src="./images/Screenshot_49.png" width="700">
        <h5>Repository ProductItemRepository</h5>
        <img src="./images/Screenshot_50.png" width="700">
        <h5>Dependencies - openfeign & hateoas</h5>
        <img src="./images/Screenshot_53.png" width="700">
        <h5>Customer Rest Client</h5>
        <img src="./images/Screenshot_51.png" width="700">
        <h5>Inventory Rest Client</h5>
        <img src="./images/Screenshot_52.png" width="700">
        <h5>Configuration</h5>
        <img src="./images/Screenshot_55.png" width="700">
        <img src="./images/Screenshot_56.png" width="700">
        <h5>Données de test</h5>
        <img src="./images/Screenshot_54.png" width="700">
        <h5>Aprés démarrage - order service</h5>
        <img src="./images/Screenshot_57.png" width="700">
        <img src="./images/Screenshot_58.png" width="700">
        <img src="./images/Screenshot_59.png" width="700">
        <img src="./images/Screenshot_60.png" width="700">
        <img src="./images/Screenshot_61.png" width="700">
        <h5>fullOrder</h5>
        <img src="./images/Screenshot_62.png" width="700">
        <img src="./images/Screenshot_63.png" width="700">

        
</div>

<!-- <img src="./screens/rodape_readme.jpg" alt="Art for footer readme.md" /> -->
