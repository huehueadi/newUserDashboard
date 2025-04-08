// import React, { useEffect, useState } from 'react';

// const Onboarding = () => {
//   // State for tracking current step and selections
//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedPurpose, setSelectedPurpose] = useState('');
//   const [selectedWorkType, setSelectedWorkType] = useState('');
//   const [selectedPersonalUse, setSelectedPersonalUse] = useState('');
//   const [selectedEducationType, setSelectedEducationType] = useState('');
//   const [selectedUseCases, setSelectedUseCases] = useState([]);
//   const [selectedSource, setSelectedSource] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isCompleted, setIsCompleted] = useState(false);

//   const purposeOptions = [
//     { value: 'work', icon: '💼', title: 'For work', description: 'Business use with teams or clients' },
//     { value: 'personal', icon: '👤', title: 'For personal use', description: 'Individual projects and applications' },
//     { value: 'education', icon: '🎓', title: 'For education', description: 'As a student or educator' }
//   ];

//   const workTypeOptions = [
//     { value: 'consultant', icon: '📊', title: 'Consultant', description: 'Client management and advisory services' },
//     { value: 'developer', icon: '💻', title: 'Developer', description: 'Software development and engineering' },
//     { value: 'design', icon: '🎨', title: 'Design', description: 'UX/UI, graphic, or product design' },
//     { value: 'marketing', icon: '📱', title: 'Marketing', description: 'Digital, content, or product marketing' },
//     { value: 'business', icon: '📈', title: 'Business', description: 'Management, operations, or leadership' },
//     { value: 'other', icon: '✨', title: 'Other', description: 'Any other professional field' }
//   ];

//   const personalUseOptions = [
//     { value: 'personal-apps', icon: '📱', title: 'Personal Applications', description: 'Software for your own use' },
//     { value: 'side-projects', icon: '🚀', title: 'Side Projects', description: 'Hobby or passion projects' },
//     { value: 'gaming', icon: '🎮', title: 'Gaming', description: 'Game development or modification' },
//     { value: 'creative', icon: '🎨', title: 'Creative Work', description: 'Art, music, or content creation' },
//     { value: 'other-personal', icon: '✨', title: 'Other', description: 'Any other personal use' }
//   ];

//   const educationOptions = [
//     { value: 'student', icon: '👨‍🎓', title: 'Student', description: 'Using for coursework or research' },
//     { value: 'teacher', icon: '👩‍🏫', title: 'Teacher/Educator', description: 'Using for classroom or teaching' },
//     { value: 'researcher', icon: '🔬', title: 'Researcher', description: 'Academic or scientific research' },
//     { value: 'institution', icon: '🏫', title: 'Educational Institution', description: 'School, university, or online platform' }
//   ];

//   const useCaseOptions = [
//     { value: 'generate-keys', title: 'Generate license keys', description: 'Create secure, unique keys for your software' },
//     { value: 'track-licenses', title: 'Track license usage', description: 'Monitor activations and expiration dates' },
//     { value: 'manage-customers', title: 'Manage customer licenses', description: 'Organize licenses by customer or user' },
//     { value: 'bulk-operations', title: 'Bulk license operations', description: 'Generate or manage multiple licenses at once' },
//     { value: 'hardware-binding', title: 'Hardware ID validation', description: 'Bind licenses to specific hardware' },
//     { value: 'not-sure', title: 'Not sure yet', description: 'I\'m still exploring options' }
//   ];

//   const sourceOptions = [
//     { value: 'friend', icon: '👥', title: 'From a friend or colleague' },
//     { value: 'search', icon: '🔍', title: 'Search engine (Google, Bing, etc.)' },
//     { value: 'social', icon: '📱', title: 'Social media' },
//     { value: 'blog', icon: '📝', title: 'Blog or article' },
//     { value: 'podcast', icon: '🎙️', title: 'Podcast or video' },
//     { value: 'other-source', icon: '✨', title: 'Other' }
//   ];

//   // Navigation handlers
//   const goToNextStep = () => {
//     setCurrentStep(prev => prev + 1);
//   };

//   const goToPreviousStep = () => {
//     setCurrentStep(prev => prev - 1);
//   };

//   const handleRadioSelection = (value, setter) => {
//     setter(value);
//   };

//   const handleCheckboxSelection = (value) => {
//     setSelectedUseCases(prev => {
//       if (prev.includes(value)) {
//         return prev.filter(item => item !== value);
//       } else {
//         return [...prev, value];
//       }
//     });
//   };

//   const handleSubmit = () => {
//     setIsSubmitting(true);
    
//     const selectedData = {
//       purpose: selectedPurpose,
//       workType: selectedPurpose === 'work' ? selectedWorkType : null,
//       personalUse: selectedPurpose === 'personal' ? selectedPersonalUse : null,
//       educationType: selectedPurpose === 'education' ? selectedEducationType : null,
//       planToDo: selectedUseCases,
//       source: selectedSource
//     };
    
//     console.log('Onboarding data:', selectedData);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsCompleted(true);
      
//       // Redirect after success
//       setTimeout(() => {
//         window.location.href = 'dashboard.html';
//       }, 1000);
//     }, 1500);
//   };

//   // Render progress dots
//   const renderProgressDots = () => {
//     return (
//       <div className="progress-indicator">
//         {[1, 2, 3, 4].map(step => (
//           <div 
//             key={step}
//             className={`progress-dot ${currentStep >= step ? 'active' : ''}`} 
//             data-step={step}
//           />
//         ))}
//       </div>
//     );
//   };

//   // Render radio option items
//   const renderRadioOptions = (options, selectedValue, onSelect) => {
//     return options.map(option => (
//       <div 
//         key={option.value}
//         className={`option-item ${selectedValue === option.value ? 'selected' : ''}`}
//         onClick={() => onSelect(option.value)}
//         data-value={option.value}
//       >
//         <div className="option-radio"></div>
//         <div className="option-icon">{option.icon}</div>
//         <div className="option-content">
//           <div className="option-title">{option.title}</div>
//           {option.description && <div className="option-description">{option.description}</div>}
//         </div>
//       </div>
//     ));
//   };

//   // Render checkbox options
//   const renderCheckboxOptions = (options) => {
//     return options.map(option => (
//       <div 
//         key={option.value}
//         className={`checkbox-option ${selectedUseCases.includes(option.value) ? 'selected' : ''}`}
//         onClick={() => handleCheckboxSelection(option.value)}
//         data-value={option.value}
//       >
//         <div className="checkbox"></div>
//         <div className="option-content">
//           <div className="option-title">{option.title}</div>
//           {option.description && <div className="option-description">{option.description}</div>}
//         </div>
//       </div>
//     ));
//   };

//   // Determine if next button should be disabled
//   const isNextButtonDisabled = () => {
//     switch (currentStep) {
//       case 1:
//         return !selectedPurpose;
//       case 2:
//         if (selectedPurpose === 'work') return !selectedWorkType;
//         if (selectedPurpose === 'personal') return !selectedPersonalUse;
//         if (selectedPurpose === 'education') return !selectedEducationType;
//         return true;
//       case 3:
//         return false; // Allow proceeding even if no checkboxes are selected
//       case 4:
//         return false; // Source is optional
//       default:
//         return false;
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Enter' && !isNextButtonDisabled() && !isSubmitting) {
//         if (currentStep < 4) {
//           goToNextStep();
//         } else {
//           handleSubmit();
//         }
//       } else if (e.key === 'Escape' && currentStep > 1 && !isSubmitting) {
//         goToPreviousStep();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [
//     currentStep, 
//     selectedPurpose, 
//     selectedWorkType, 
//     selectedPersonalUse, 
//     selectedEducationType, 
//     isSubmitting
//   ]);

//   return (
//     <div className='card-container1'>
//     <div className="onboarding-container">
//       <div className="onboarding-progress">
//         {renderProgressDots()}
//       </div>
      
//       <div className="onboarding-content">
//         {/* Step 1: How do you plan to use ZenLicense? */}
//         {currentStep === 1 && (
//           <div className="onboarding-step active" id="step-1">
//             <div className="step-header">
//               <div className="step-number">1/4</div>
//               <h1 className="step-title">How do you plan to use ZenLicense?</h1>
//               <p className="step-subtitle">We use your answers to personalize your ZenLicense experience.</p>
//             </div>
            
//             <div className="option-list">
//               {renderRadioOptions(
//                 purposeOptions, 
//                 selectedPurpose, 
//                 (value) => handleRadioSelection(value, setSelectedPurpose)
//               )}
//             </div>
            
//             <div className="navigation">
//               <div></div> {/* Empty div to maintain flex spacing */}
//               <button 
//                 className="nav-button next-button" 
//                 disabled={isNextButtonDisabled()}
//                 onClick={goToNextStep}
//               >
//                 Continue →
//               </button>
//             </div>
//           </div>
//         )}
        
//         {/* Step 2: Specific purpose questions based on Step 1 selection */}
//         {currentStep === 2 && (
//           <div className="onboarding-step active">
//             {selectedPurpose === 'work' && (
//               <>
//                 <div className="step-header">
//                   <div className="step-number">2/4</div>
//                   <h1 className="step-title">What kind of work do you do?</h1>
//                   <p className="step-subtitle">We'll customize your dashboard accordingly</p>
//                 </div>
                
//                 <div className="option-list">
//                   {renderRadioOptions(
//                     workTypeOptions, 
//                     selectedWorkType, 
//                     (value) => handleRadioSelection(value, setSelectedWorkType)
//                   )}
//                 </div>
//               </>
//             )}
            
//             {selectedPurpose === 'personal' && (
//               <>
//                 <div className="step-header">
//                   <div className="step-number">2/4</div>
//                   <h1 className="step-title">What will you use ZenLicense for?</h1>
//                   <p className="step-subtitle">Help us customize your experience</p>
//                 </div>
                
//                 <div className="option-list">
//                   {renderRadioOptions(
//                     personalUseOptions, 
//                     selectedPersonalUse, 
//                     (value) => handleRadioSelection(value, setSelectedPersonalUse)
//                   )}
//                 </div>
//               </>
//             )}
            
//             {selectedPurpose === 'education' && (
//               <>
//                 <div className="step-header">
//                   <div className="step-number">2/4</div>
//                   <h1 className="step-title">Tell us about your educational use</h1>
//                   <p className="step-subtitle">We offer special features for educational users</p>
//                 </div>
                
//                 <div className="option-list">
//                   {renderRadioOptions(
//                     educationOptions, 
//                     selectedEducationType, 
//                     (value) => handleRadioSelection(value, setSelectedEducationType)
//                   )}
//                 </div>
//               </>
//             )}
            
//             <div className="navigation">
//               <button 
//                 className="nav-button back-button" 
//                 onClick={goToPreviousStep}
//               >
//                 ← Back
//               </button>
//               <button 
//                 className="nav-button next-button" 
//                 disabled={isNextButtonDisabled()}
//                 onClick={goToNextStep}
//               >
//                 Continue →
//               </button>
//             </div>
//           </div>
//         )}
        
//         {/* Step 3: What do you plan to do with ZenLicense? */}
//         {currentStep === 3 && (
//           <div className="onboarding-step active" id="step-3">
//             <div className="step-header">
//               <div className="step-number">3/4</div>
//               <h1 className="step-title">What do you plan to do with ZenLicense?</h1>
//               <p className="step-subtitle">Select all that apply</p>
//             </div>
            
//             <div className="option-list">
//               {renderCheckboxOptions(useCaseOptions)}
//             </div>
            
//             <div className="navigation">
//               <button 
//                 className="nav-button back-button" 
//                 onClick={goToPreviousStep}
//               >
//                 ← Back
//               </button>
//               <button 
//                 className="nav-button next-button" 
//                 onClick={goToNextStep}
//               >
//                 Continue →
//               </button>
//             </div>
//           </div>
//         )}
        
//         {/* Step 4: How did you hear about us? */}
//         {currentStep === 4 && (
//           <div className="onboarding-step active" id="step-4">
//             <div className="step-header">
//               <div className="step-number">4/4</div>
//               <h1 className="step-title">How did you hear about us?</h1>
//               <p className="step-subtitle">Optional (but appreciated)</p>
//             </div>
            
//             <div className="option-list">
//               {renderRadioOptions(
//                 sourceOptions, 
//                 selectedSource, 
//                 (value) => handleRadioSelection(value, setSelectedSource)
//               )}
//             </div>
            
//             <div className="navigation">
//               <button 
//                 className="nav-button back-button" 
//                 onClick={goToPreviousStep}
//               >
//                 ← Back
//               </button>
//               <button 
//                 className="nav-button next-button" 
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <><span className="loader"></span> Processing...</>
//                 ) : isCompleted ? (
//                   <><span className="success-icon">✓</span> Complete!</>
//                 ) : (
//                   'Done'
//                 )}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };



// export default Onboarding;








import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Onboarding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectedWorkType, setSelectedWorkType] = useState('');
  const [selectedPersonalUse, setSelectedPersonalUse] = useState('');
  const [selectedEducationType, setSelectedEducationType] = useState('');
  const [selectedUseCases, setSelectedUseCases] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState(null);

  // Options (unchanged)
  const purposeOptions = [
    { value: 'work', icon: '💼', title: 'For work', description: 'Business use with teams or clients' },
    { value: 'personal', icon: '👤', title: 'For personal use', description: 'Individual projects and applications' },
    { value: 'education', icon: '🎓', title: 'For education', description: 'As a student or educator' },
  ];

  const workTypeOptions = [
    { value: 'consultant', icon: '📊', title: 'Consultant', description: 'Client management and advisory services' },
    { value: 'developer', icon: '💻', title: 'Developer', description: 'Software development and engineering' },
    { value: 'design', icon: '🎨', title: 'Design', description: 'UX/UI, graphic, or product design' },
    { value: 'marketing', icon: '📱', title: 'Marketing', description: 'Digital, content, or product marketing' },
    { value: 'business', icon: '📈', title: 'Business', description: 'Management, operations, or leadership' },
    { value: 'other', icon: '✨', title: 'Other', description: 'Any other professional field' },
  ];

  const personalUseOptions = [
    { value: 'personal-apps', icon: '📱', title: 'Personal Applications', description: 'Software for your own use' },
    { value: 'side-projects', icon: '🚀', title: 'Side Projects', description: 'Hobby or passion projects' },
    { value: 'gaming', icon: '🎮', title: 'Gaming', description: 'Game development or modification' },
    { value: 'creative', icon: '🎨', title: 'Creative Work', description: 'Art, music, or content creation' },
    { value: 'other-personal', icon: '✨', title: 'Other', description: 'Any other personal use' },
  ];

  const educationOptions = [
    { value: 'student', icon: '👨‍🎓', title: 'Student', description: 'Using for coursework or research' },
    { value: 'teacher', icon: '👩‍🏫', title: 'Teacher/Educator', description: 'Using for classroom or teaching' },
    { value: 'researcher', icon: '🔬', title: 'Researcher', description: 'Academic or scientific research' },
    { value: 'institution', icon: '🏫', title: 'Educational Institution', description: 'School, university, or online platform' },
  ];

  const useCaseOptions = [
    {
      value: 'query-documents',
      title: 'Query My Documents',
      description: 'Ask questions and get answers from your uploaded files securely and offline.',
    },
    {
      value: 'analyze-compliance',
      title: 'Compliance & Audit Checks',
      description: 'Run AI-powered checks on policy, legal, or compliance documents without data leaks.',
    },
    {
      value: 'persona-insights',
      title: 'Departmental AI Assistant',
      description: 'Use role-specific AI (e.g. legal, HR, finance) for contextual responses.',
    },
    {
      value: 'private-chat',
      title: 'Secure AI Conversations',
      description: 'Chat privately with AI — no internet, no cloud, 100% control.',
    },
    {
      value: 'offline-reports',
      title: 'Generate Offline Reports',
      description: 'Let the AI summarize or convert document insights into downloadable reports.',
    },
    {
      value: 'not-sure',
      title: 'Not sure yet',
      description: "I'm still exploring how Zencia Edge can help me.",
    },
  ];

  const sourceOptions = [
    { value: 'friend', icon: '👥', title: 'From a friend or colleague' },
    { value: 'search', icon: '🔍', title: 'Search engine (Google, Bing, etc.)' },
    { value: 'social', icon: '📱', title: 'Social media' },
    { value: 'blog', icon: '📝', title: 'Blog or article' },
    { value: 'podcast', icon: '🎙️', title: 'Podcast or video' },
    { value: 'other-source', icon: '✨', title: 'Other' },
  ];

  // Corrected handleSubmit (aligned with backend)
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const selectedData = {
      purpose: selectedPurpose,
      workType: selectedPurpose === 'work' ? selectedWorkType : null,
      personalUse: selectedPurpose === 'personal' ? selectedPersonalUse : null,
      educationType: selectedPurpose === 'education' ? selectedEducationType : null,
      planToDo: selectedUseCases, // Array of selected use cases
      source: selectedSource || null, // Optional field
    };

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(
        'https://zencia-finalbackend.vercel.app/api/onboarding',
        selectedData,
        { headers: { Authorization: `${token}` } }
      );
      console.log('Onboarding response:', response.data);
      setIsSubmitting(false);
      setIsCompleted(true);
      setTimeout(() => onComplete(), 1000); // Use onComplete prop for navigation
    } catch (error) {
      console.error('Onboarding submission failed:', error);
      setError(error.response?.data?.message || 'Failed to submit onboarding data');
      setIsSubmitting(false);
    }
  };

  // Navigation handlers
  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleRadioSelection = (value, setter) => {
    setter(value);
  };

  const handleCheckboxSelection = (value) => {
    setSelectedUseCases((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Render progress dots
  const renderProgressDots = () => {
    return (
      <div className="progress-indicator">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`progress-dot ${currentStep >= step ? 'active' : ''}`}
            data-step={step}
          />
        ))}
      </div>
    );
  };

  // Render radio option items
  const renderRadioOptions = (options, selectedValue, onSelect) => {
    return options.map((option) => (
      <div
        key={option.value}
        className={`option-item ${selectedValue === option.value ? 'selected' : ''}`}
        onClick={() => onSelect(option.value)}
        data-value={option.value}
      >
        <div className="option-radio"></div>
        <div className="option-icon">{option.icon}</div>
        <div className="option-content">
          <div className="option-title">{option.title}</div>
          {option.description && <div className="option-description">{option.description}</div>}
        </div>
      </div>
    ));
  };

  // Render checkbox options
  const renderCheckboxOptions = (options) => {
    return options.map((option) => (
      <div
        key={option.value}
        className={`checkbox-option ${selectedUseCases.includes(option.value) ? 'selected' : ''}`}
        onClick={() => handleCheckboxSelection(option.value)}
        data-value={option.value}
      >
        <div className="checkbox"></div>
        <div className="option-content">
          <div className="option-title">{option.title}</div>
          {option.description && <div className="option-description">{option.description}</div>}
        </div>
      </div>
    ));
  };

  // Determine if next button should be disabled
  const isNextButtonDisabled = () => {
    switch (currentStep) {
      case 1:
        return !selectedPurpose;
      case 2:
        if (selectedPurpose === 'work') return !selectedWorkType;
        if (selectedPurpose === 'personal') return !selectedPersonalUse;
        if (selectedPurpose === 'education') return !selectedEducationType;
        return true;
      case 3:
        return false; // Allow proceeding even if no checkboxes are selected
      case 4:
        return false; // Source is optional
      default:
        return false;
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && !isNextButtonDisabled() && !isSubmitting) {
        if (currentStep < 4) {
          goToNextStep();
        } else {
          handleSubmit();
        }
      } else if (e.key === 'Escape' && currentStep > 1 && !isSubmitting) {
        goToPreviousStep();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, selectedPurpose, selectedWorkType, selectedPersonalUse, selectedEducationType, isSubmitting]);

  return (
    <div className="card-container1">
      <div className="onboarding-container">
        <div className="onboarding-progress">{renderProgressDots()}</div>

        <div className="onboarding-content">
          {error && <div className="error-message">{error}</div>}

          {/* Step 1: How do you plan to use ZenLicense? */}
          {currentStep === 1 && (
            <div className="onboarding-step active" id="step-1">
              <div className="step-header">
                <div className="step-number">1/4</div>
                <h1 className="step-title">How do you plan to use Zencia?</h1>
                <p className="step-subtitle">We use your answers to personalize your Zencia experience.</p>
              </div>
              <div className="option-list">
                {renderRadioOptions(purposeOptions, selectedPurpose, (value) =>
                  handleRadioSelection(value, setSelectedPurpose)
                )}
              </div>
              <div className="navigation">
                <div></div>
                <button
                  className="nav-button next-button"
                  disabled={isNextButtonDisabled()}
                  onClick={goToNextStep}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Specific purpose questions */}
          {currentStep === 2 && (
            <div className="onboarding-step active">
              {selectedPurpose === 'work' && (
                <>
                  <div className="step-header">
                    <div className="step-number">2/4</div>
                    <h1 className="step-title">What kind of work do you do?</h1>
                    <p className="step-subtitle">We'll customize your dashboard accordingly</p>
                  </div>
                  <div className="option-list">
                    {renderRadioOptions(workTypeOptions, selectedWorkType, (value) =>
                      handleRadioSelection(value, setSelectedWorkType)
                    )}
                  </div>
                </>
              )}
              {selectedPurpose === 'personal' && (
                <>
                  <div className="step-header">
                    <div className="step-number">2/4</div>
                    <h1 className="step-title">What will you use Zencia for?</h1>
                    <p className="step-subtitle">Help us customize your experience</p>
                  </div>
                  <div className="option-list">
                    {renderRadioOptions(personalUseOptions, selectedPersonalUse, (value) =>
                      handleRadioSelection(value, setSelectedPersonalUse)
                    )}
                  </div>
                </>
              )}
              {selectedPurpose === 'education' && (
                <>
                  <div className="step-header">
                    <div className="step-number">2/4</div>
                    <h1 className="step-title">Tell us about your educational use</h1>
                    <p className="step-subtitle">We offer special features for educational users</p>
                  </div>
                  <div className="option-list">
                    {renderRadioOptions(educationOptions, selectedEducationType, (value) =>
                      handleRadioSelection(value, setSelectedEducationType)
                    )}
                  </div>
                </>
              )}
              <div className="navigation">
                <button className="nav-button back-button" onClick={goToPreviousStep}>
                  ← Back
                </button>
                <button
                  className="nav-button next-button"
                  disabled={isNextButtonDisabled()}
                  onClick={goToNextStep}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: What do you plan to do with ZenLicense? */}
          {currentStep === 3 && (
            <div className="onboarding-step active" id="step-3">
              <div className="step-header">
                <div className="step-number">3/4</div>
                <h1 className="step-title">What do you plan to do with Zencia?</h1>
                <p className="step-subtitle">Select all that apply</p>
              </div>
              <div className="option-list">{renderCheckboxOptions(useCaseOptions)}</div>
              <div className="navigation">
                <button className="nav-button back-button" onClick={goToPreviousStep}>
                  ← Back
                </button>
                <button className="nav-button next-button" onClick={goToNextStep}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: How did you hear about us? */}
          {currentStep === 4 && (
            <div className="onboarding-step active" id="step-4">
              <div className="step-header">
                <div className="step-number">4/4</div>
                <h1 className="step-title">How did you hear about us?</h1>
                <p className="step-subtitle">Optional (but appreciated)</p>
              </div>
              <div className="option-list">
                {renderRadioOptions(sourceOptions, selectedSource, (value) =>
                  handleRadioSelection(value, setSelectedSource)
                )}
              </div>
              <div className="navigation">
                <button className="nav-button back-button" onClick={goToPreviousStep}>
                  ← Back
                </button>
                <button
                  className="nav-button next-button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loader"></span> Processing...
                    </>
                  ) : isCompleted ? (
                    <>
                      <span>✓</span> Complete!
                    </>
                  ) : (
                    'Done'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;