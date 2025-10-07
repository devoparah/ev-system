<template>
    <section class="bg-gray-50 text-black">
        <div class="px-5 lg:px-[5%] py-20">
            <div class="grid lg:grid-cols-5 lg:gap-10">
                <div class="col-span-5 lg:col-span-3">
                    <h2 class="mb-10 lg:max-w-xl">Frequently Asked Questions</h2>
                    <div class="rounded-sm  shadow-lg px-5 lg:px-10">
                        <div v-for="(faq,index) in faqs" :key="index">
                            <div class="p-5 border-b border-gray-300">
                                <button @click="toggleFaq(index)" class="text-start">
                                    <h5 :class="activeIndex === index ? 'text-active text-emerald-700' : ''">{{ faq.question }}</h5>
                                </button>
                                <p :class="activeIndex === index ? '' :[`hidden `]" class="font-light  text-sm md:text-base">
                                {{ faq.answer }}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2 flex flex-col gap-5 lg:gap-10 lg:mt-[50%] text-center py-20 lg:py-0">
                        <Icon icon="mdi:message" class="w-full text-center text-black text-6xl md:text-8xl" />
                        <h3>Do you have more questions?</h3>
                        <p> End-to-end ev technology and investment management in single solution. Meet the right platform to help realize</p>
                        <button class="w-full px-10 py-3 bg-black text-gray-50 font-semibold md:text-bold">Shoot a Direct Email</button>
              


                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const activeIndex=ref(null);
function toggleFaq(index){
    activeIndex.value=activeIndex.value === index ? null:index; 
}
toggleFaq(0);
const faqs = ref([
    {
        question: "Is Certas a Multi-Level Marketing (MLM) system?",
        answer:"No. Certas is a licensed investment company and does not operate as an MLM system."
    },
    {
        question: "Is the company officially registered?",
        answer:"Yes. Certas is a fully licensed and officially registered investment company."
    },
    {
        question: "Why cryptocurrency?",
        answer:"Cryptocurrency is the most efficient vehicle for investing in the EV revolution. It is borderless, fast, secure, and inclusive, making it suitable for investors worldwide."
    },
    {
        question: "Which digital currencies are accepted?",
        answer:"Certas accepts a wide range of e-currencies including Bitcoin, Tether-USDT (TRC20 and ERC20), Ethereum, TRX, Litecoin, Bitcoin Cash, BNB, BSC, XRP, Dash, Dogecoin, and Perfect Money."
    },
    {
        question: "How do I create an account?",
        answer:"Click on the Register button in the navigation menu and complete all the required fields."
    },
    {
        question: "Can I register multiple accounts with the same email address?",
        answer:"No. Each email address can only be associated with one account."
    },
    {
        question: "How do I activate an investment plan?",
        answer:"After registration, simply choose your preferred investment pool and make a deposit to activate the plan."
    },
    {
        question: "What is the limit on the investment pool I can activate?",
        answer:"There is no limit. You may activate as many investment pools as you wish at any time."
    },
    {
        question: "When is my investment due for withdrawal?",
        answer:"Each investment pool has its own time duration. At the end of the chosen duration, you may request a withdrawal."
    },
    {
        question: "How do I make a withdrawal?",
        answer:"Log into your account, click the Withdraw button on your dashboard, and provide the required details to process your request."
    },
    {
        question: "What is the minimum withdrawal amount?",
        answer:"The minimum withdrawal value at Certas is $10."
    },
    {
        question: "Are there any internal wallet charges?",
        answer:"No. Certas does not impose any internal wallet charges."
    },
    {
        question: "Can I reinvest?",
        answer:"Yes. Once your investment duration has elapsed, you may reinvest to continue growing your account balance."
    },
    {
        question: "How can I update my email address or password?",
        answer:"Log in to your account, go to Account Information, and make the necessary changes to your email address or password."
    },
]);


</script>
