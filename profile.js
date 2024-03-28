// Define an object that contains the districts for each state.
const districtData = {
    "Andhra Pradesh": ["Srikakulam", "Parvathipuram Manyam", "Vizianagaram","Visakhapatnam","Alluri Sitharama Raju","Anakapalli","Kakinada","East Godavari","Dr. B. R. Ambedkar Konaseema","Eluru","West Godavari","NTR","Krishna","Palnadu","Guntur","Bapatla","Prakasam","Sri Potti Sriramulu Nellore","Kurnool","Nandyal","Anantapur","Sri Sathya Sai","YSR","Annamayya","Tirupati","Chittoor"],

    "Arunachal Pradesh": ["Anjaw", "Changlang", "Kamle","Kra Daadi","Kurung Kumey","Lepa-Rada","Lohit","Longding","Namsai","Pakke-Kessang","Papum Pare","Shi-Yomi","Siang","Tawang","Tirap","Lower Dibang Valley","Dibang Valley","East Kameng","West Kameng","East Siang","Lower Siang","Upper Siang","West Siang","Lower Subansiri","Upper Subansiri","Itanagar"],

    "Assam": ["Baksa", "Barpeta", "Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],

    "Bihar":["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","	Gopalganj","Jamui","Jehanabad","Khagaria","Kishanganj","Kaimur","Katihar","Lakhisarai","Madhubani","Munger","Madhepura","Muzaffarpur","Nalanda","Patna","Purnia","Rohtas","Saharsa","Samastipur","Sheohar","Sheikhpura","Saran","Sitamarhi","Supaul","Siwan","Vaishali","West Champaran"],

    "Chhattisgarh":["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Gaurella-Pendra-Marwahi","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Khairagarh-Chhuikhadan-Gandai","Korba","Koriya","Mahasamund","Manendragarh-Chirmiri-Bharatpur","Mohla-Manpur- Ambagarh Chowki","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sarangarh-Bilaigarh","Sakti","	Sukma","Surajpur","Surguja"],

    "Goa":["North Goa","South Goa"],

    "Gujarat":["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhumi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagarh","	Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","	Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],

    "Haryana":["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],

    "Himachal Pradesh":["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],

    "Jammu and Kashmir":["Kathua","Jammu","Samba","Udhampur","Reasi","Rajouri","Poonch","Doda","Ramban","Kishtwar","Anantnag","Kulgam","Pulwama","Shopian","Budgam","Srinagar","Ganderbal","Bandipore","Baramulla","Kupwara"],

    "Jharkhand":["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Kodarma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Saraikela-Kharsawan","Simdega","West Singhbhum"],

    "Karnataka":["Bagalkot","Bengaluru Urban","Bengaluru Rural","Belagavi","Ballari","Bidar","Vijayapur","Chamarajanagar","Chikballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Kalaburagi","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru","Udupi","Uttara Kannada","Yadgir"],

    "Kerala":["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","hrissur","Wayanad"],

    "Madhya Pradesh":["Bhopal","Raisen","Rajgarh","Sehore","Vidisha","Morena","Sheopur","Bhind","Gwalior","Ashoknagar","Shivpuri","Datia","Guna","	Alirajpur","Barwani","Burhanpur","Indore","Dhar","Jhabua","Khandwa","Khargone","Balaghat","Chhindwara","Jabalpur","Katni","Mandla"],

    "Maharashtra":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Jalgaon","Jalna","Kolhapur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","	Osmanabad","Pune","	Parbhani","Raigad","Ratnagiri","Solapur"],

    "Manipur":["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kamjong","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],

    "Meghalaya":["North Garo Hills","East Garo Hills","South Garo Hills","West Garo Hills","South West Garo Hills","West Jaintia Hills","East Jaintia Hills","East Khasi Hills","West Khasi Hills","South West Khasi Hills","Eastern West Khasi Hills","Ri-Bhoi"],

    "Mizoram":["Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha",
    "Serchhip","Saitual"],

    "Nagaland":["Chumoukedima","Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Niuland","Noklak","Peren","Shamator","Tuensang","Wokha"],

    "Odisha":["Angul","Balangir","Balasore","Cuttack","Dhenkanal","Gajapati","Jajpur","Khordha","Kalahandi","Koraput",
    "Malkangiri","Nabarangpur","Nayagarh","Rayagada","Subarnapur","Boudh","Bargarh","Bhadrak","Debagarh","Ganjam","Puri","Sambalpur","Sundargarh"],

    "Punjab":["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Firozpur","Fazilka","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Pathankot","Patiala","Rupnagar","Sangrur","Tarn Taran"],

    "Rajasthan":["Ajmer","Kota","Udaipur","Jaipur","Jaisalmer","Bhilwara","Rajsamand","Sirohi","Dungapur","Jalore",
    "Banswara","Pali","Sri Ganganagar","Pratapgarh","Sawai Madhopur","Chittorgarh","Sikar","Nagaur","Churu","Dholpur"],

    "Sikkim":["Gangtok","Mangan","Namchi","Gyalshing","Pakyong","Soreng"],

    "Tamil Nadu":["Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Kallakurichi","Kanchipuram","Kanniyakumari","Krishnagiri","Madurai","Nilgiris","Ramanathapuram","Ranipet","Tiruchirappalli","Vellore","Viluppuram"],

    "Telangana":["Adilabad","Kumuram Bheem","Peddapalli","Kamareddy","Karimnagar","Medak","Siddipet","Warangal","Hyderabad","Vikarabad","Wanaparthy"],

    "Tripura":["Dhalai","Gomati","Khowai","North Tripura","Sipahijala","South Tripura","Unakoti","West Tripura"],

    "Uttarakhand":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],

    "Uttar Pradesh":["Aligarh","Kasganj","Agra","Mathura","Firozabad","Azamgarh","Pratapgarh","Shahjahanpur","Siddharthnagar","Bahraich","Sultanpur","Banda","Deoria","Kanpur Nagar","Lucknow","Mirzapur","Ghaziabad","Meerut","Rampur","Moradabad","Ghazipur","Varanasi","Saharanpur"],

    "West Bengal":["Alipurduar","Bankura","Paschim Bardhaman","Purba Bardhaman","Birbhum","Cooch Behar","Darjeeling","Dakshin Dinajpur","Hooghly","Howrah","Jalpaiguri","Jhargram","Kolkata","Kalimpong","Malda","Paschim Medinipur","Purba Medinipur","Murshidabad","Nadia","North 24 Parganas","South 24 Parganas","Purulia","Uttar Dinajpur"],

    "Andaman and Nicobar Islands":["Nicobar","North And Middle Andaman","South Andaman"],

    "Chandigarh":["Chandigarh"],

    "Daman and Diu":["Daman","Diu","Dadra and Nagar Haveli"],

    "Delhi":["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"],

    "Lakshadweep":["Lakshadweep"],

    "Puducherry":["Karaikal","Mahe","Puducherry","Yanam"]

};

const stateSelect = document.getElementById("stateSelect");
const districtSelect = document.getElementById("districtSelect");

// Event listener for the state selection.
stateSelect.addEventListener("change", function() {
    const selectedState = stateSelect.value;
    console.log("Selected State: " + selectedState);
    
    const districts = districtData[selectedState];

    // Clear the existing options in the district dropdown.
    districtSelect.innerHTML = "";

    // Add the new district options based on the selected state.
    if (districts) {
        districts.forEach(function(district) {
            const option = document.createElement("option");
            option.textContent = district;
            option.value = district;
            districtSelect.appendChild(option);
        });
    } else {
        // If no districts are available, display a placeholder message.
        const option = document.createElement("option");
        option.textContent = "No districts available for this state";
        districtSelect.appendChild(option);
    }
});
