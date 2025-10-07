<template lang="">
    <section class="bg-gradient-to-br bg-gray-50 via-gray-200 to-gray-50 flex justify-center">
        <div class="px-5 lg:px-[5%] py-20">
            <h2 class="mb-5 lg:mb-10 text-center"> TERMS OF USE</h2>
            <div v-for="(term,index) in terms" :key="index" class="mb-10">
                <h3 class="mb-3"><span class="font-semibold pr-3">{{term.no}}.</span> {{term.title}}</h3>
                <p v-for="text in term.texts"class="text-sm md:text-lg font-light mb-2">
                   <span class="font-semibold pr-3">{{text.no}}</span>
                   {{text.p}}
                </p>  
            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref } from 'vue';
    const terms=([
        {no:'1',title:'Introduction',texts:([
                {no:'',p:'These Terms and Conditions (the “Agreement”) govern the use of the website and services provided by Certas (the “Company”). By registering as an Investor or Member (the “Investor”), you acknowledge that you have read, understood, and agreed to be bound by these Terms.'},
                {no:'',p:'This Agreement constitutes a legally binding contract in accordance with applicable international law. If you do not agree with these Terms or any part thereof, you must refrain from using this website.'}
            ])
        },
        {no:'2',title:'Eligibility',texts:([
                {no:'2.1',p:'Only individuals who are at least eighteen (18) years of age may register and use the services of Certas.'},
                {no:'2.2',p:'Both individuals and legal entities from any jurisdiction may open an account, provided such use does not violate the laws of their country of residence.'},
                {no:'2.3',p:'By registering, the Investor warrants that all information provided is true, accurate, complete, and current. The Investor undertakes to update such information promptly in the event of any change.'}
            ])
        },
        {no:'3',title:'Account Registration and Security',texts:([
                {no:'3.1',p:'Registration as a Member is required to access certain features of the website.'},
                {no:'3.2',p:'Each Investor may register only one (1) account per email address. Multiple registrations under the same email address are strictly prohibited. In the event of such violation, the Company reserves the right to suspend or terminate all associated accounts.'},
                {no:'3.3',p:'The Investor is solely responsible for maintaining the confidentiality of login credentials, including passwords. The Company shall not be liable for any loss or damage arising from unauthorized use of the Investor’s account.'}
            ])
        },
        {no:'4',title:'Investments and Financial Transactions',texts:([
                {no:'4.1',p:'Each deposit constitutes a private transaction between the Investor and the Company.'},
                {no:'4.2',p:'The Investor makes all investment decisions independently and assumes full responsibility for such decisions, including the associated financial risks.'},
                {no:'4.3',p:'All profit accruals shall be credited to the Investor’s Personal Account in accordance with the selected investment package.'},
                {no:'4.4',p:'The Company accepts deposits via the following electronic currencies: Bitcoin, Tether (USDT – TRC20 and ERC20), Ethereum, TRX, Litecoin, Bitcoin Cash, BNB, BSC, XRP, Dash, Perfect Money, and Dogecoin.'},
                {no:'4.5',p:'Profit accruals are automated and subject to the terms of the investment plan chosen by the Investor. Withdrawals are generally processed within twelve (12) hours.'},
                {no:'4.6',p:'The Company shall not be held liable for financial losses arising from cryptocurrency volatility, technical failures of third-party payment systems, or force majeure events.'}
            ])
        },
        {no:'5',title:'Information Sharing',texts:([
                {no:'5.1',p:'The Company does not sell, exchange, or transfer personal information to third parties without the consent of the Investor, except in cases where such disclosure is:'},
                {no:'',p:'Necessary to provide requested services;'},
                {no:'',p:'Required by applicable law or competent authorities.'}
            ])
        },
        {no:'6',title:'Storage and Retention',texts:([
                {no:'6.1',p:'Personal information is stored in accordance with the Company’s data retention and archiving policies.'},
                {no:'6.2',p:' Investors may request access to or deletion of their personal data by contacting the Company directly.'}
            ])
        }
    ]);
</script>
<style lang="">
    
</style>