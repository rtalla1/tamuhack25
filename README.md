# HeartLink

HeartLink is a personalized AI-powered chatbot designed to support dementia patients in long-term care facilities by engaging them in conversations tailored to their personal memories and experiences. The platform empowers family members to contribute meaningful memories and enables caregivers to facilitate more personalized interactions for their loved ones.

## Inspiration

We recognized that dementia patients in long-term care often lack personalized attention due to resource constraints. We saw an opportunity to leverage Large Language Models (LLMs) to create an application that helps enhance the quality of care and engagement for these patients through memory-based conversations.

## What It Does

- Family members log into the HeartLink website to upload personal memories, stories, and details as text entries.
- Caregivers can log in to HeartLink to access a chatbot interface.
- Patients can interact with **Link**, the chatbot, which dynamically tailors its conversation using the personalized memory data contributed by the family.
- The chatbot provides an engaging experience, including a speaking avatar to make interactions more natural.

## How We Built It

- **Frontend/UI**: [Next.js](https://nextjs.org/) with React for an intuitive and cohesive web interface.
- **Chatbot / RAG LLM**: Built using [AWS Bedrock](https://aws.amazon.com/bedrock/) to power the Retrieval-Augmented Generation (RAG) architecture, enabling personalized responses based on uploaded memory data.
- **Database**: AWS services used for securely storing user-contributed memories and chat data.

## Features

- Family member authentication  
- Memory uploading (text-based)  
- Caregiver authentication  
- Chatbot with personalized responses  
- Chatbot avatar with "speaking" animation  
- Cohesive UI/UX  

## What We Learned

- How to design and implement a Retrieval-Augmented Generation LLM pipeline  
- Building user-friendly and accessible interfaces with Next.js and React  
- Uploading and managing structured data for AI applications in AWS  
- Managing frontend/backend integration challenges in real-time applications  

## Future Plans

- **Audio-to-text**: Enable voice-based interactions for patients who may struggle with typing  
- **Photo uploads**: Allow family members to upload photos, enriching memory context and chatbot conversation depth  
- **Enhanced chatbot display**: More natural conversational flow and dynamic avatar animations  
- **Mobile optimization**: Ensure a seamless experience across devices for caregivers and families  

## Getting Started (For Devs)

1. Clone the repo:
    ```bash
    git clone https://github.com/rtalla1/tamuhack25.git
    cd tamuhack25
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Configure AWS Bedrock keys / credentials
    - Configure database access

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contributing

Pull requests and issues are welcome! If you'd like to contribute improvements or new features, feel free to fork the project and submit a PR.

---
