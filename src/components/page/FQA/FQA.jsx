import FAQSection from "./FQASection";


const FQA = () => {
    const techGamingFAQs = [
        {
            id: 1,
            question: 'Is there a dress code for the event?',
            answer: 'There is no specific dress code, but comfortable and casual attire is recommended.'
        },
        {
            id: 2,
            question: 'Is there parking available?',
            answer: 'Yes, there is ample parking space near the venue.'
        },
        {
            id: 3,
            question: 'Can I bring my own gaming setup?',
            answer: 'Yes, participants are encouraged to bring their gaming setups.'
        },
        {
            id: 4,
            question: 'Are there food and drinks available at the venue?',
            answer: 'Yes, there will be a variety of food and drinks available for purchase.'
        },
        {
            id: 5,
            question: 'How can I register for the gaming tournament?',
            answer: 'You can register for the tournament on our website or at the venue on the day of the event.'
        },
        {
            id: 6,
            question: 'What prizes are available for the tournament winners?',
            answer: 'Prizes include gaming peripherals, gift cards, and exclusive merchandise.'
        },
        {
            id: 7,
            question: 'Is there an age restriction for the event?',
            answer: 'The event is open to participants of all ages. However, some gaming tournaments may have age restrictions.'
        },
        {
            question: 'Are spectators allowed?',
            answer: 'Yes, spectators are welcome to attend and enjoy the event.'
        },
        {
            question: 'Can I volunteer to help with the event?',
            answer: 'Yes, we welcome volunteers! Please contact us for more information on how to get involved.'
        },
    ];

    return (
        <div>
            <FAQSection faqs={techGamingFAQs}></FAQSection>
        </div>
    );
};

export default FQA;
