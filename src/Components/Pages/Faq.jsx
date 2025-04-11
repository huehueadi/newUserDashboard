import React, { useState } from 'react';
import './Faq.css';

function FAQ() {
  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What is Zencia Edge?",
      answer: "Zencia Edge is an AI-powered, offline data processing solution that allows businesses to securely analyze and interact with their private datasets. It enables real-time AI-driven insights, document-based Q&A, and AI-assisted decision-making—all without needing an internet connection."
    },
    {
      id: 2,
      question: "How does Zencia Edge work?",
      answer: "Users upload their own data (TXT, PDF, DOCX, etc.) into the Zencia Edge chat interface. The AI then processes the data and provides accurate, context-aware responses, helping businesses extract key insights and make informed decisions quickly."
    },
    {
      id: 3,
      question: "Does Zencia Edge require an internet connection?",
      answer: "No. Zencia Edge operates 100% offline, ensuring maximum data privacy and security. This means your sensitive business information stays within your network, making it ideal for enterprises handling confidential data."
    },
    {
      id: 4,
      question: "⁠What are Personas in Zencia Edge?",
      answer: "Personas in Zencia Edge are customizable AI personalities designed to align with your organization's communication style, task requirements, and user expectations. Each persona can have a distinct tone, knowledge base, behavior, and interaction style tailored to specific departments, teams, or use cases"
    },
    {
        id: 4,
        question: "Why does Zencia Edge use Personas?",
        answer: "Personas make Zencia Edge more human-like, versatile, and aligned with your business objectives. Instead of a one-size-fits-all AI, Zencia Edge enables multiple specialized agents (personas) that act as expert assistants for different tasks, such as HR queries, technical support, data analysis, or management reporting."
      },
      {
        id: 4,
        question: "What are Zencia Personas?",
        answer: "Personas are like different expert team members inside Zencia Edge. You can create a Persona for HR, Finance, IT, Legal, or any department you want. Each Persona knows its own documents and gives answers according to its role — making the AI smarter and more helpful for your team."
      },
      {
        id: 4,
        question: "Is it difficult to use?",
        answer: "Not at all! Zencia Edge has a simple and friendly interface. Even non-technical teams can use it easily to get answers, analyze reports, and automate their everyday tasks."
      },
      {
        id: 4,
        question: "What types of files does Zencia Edge support?",
        answer: "Zencia Edge can analyze and extract insights from various file formats, including:\n✔ TXT – Text files\n✔ PDF – Digital documents\n✔ DOCX – Word files\nThis allows users to upload multiple data formats and get structured, meaningful insights instantly."
      }
  ];

  // State to track which FAQ item is open
  const [openFaqId, setOpenFaqId] = useState(null);

  // Toggle FAQ item
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="dashboard-content-container">
      <div className="faq-container">
        <div className="faq-header">
        <div className="pricing-title-tag">Faq</div>

          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Find answers to the most common questions about Zencia Edge
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openFaqId === faq.id ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFaq(faq.id)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {openFaqId === faq.id ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                {faq.answer.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;