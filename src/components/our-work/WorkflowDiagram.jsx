import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const WorkflowDiagram = () => {
    const workflowStages = [
        {
            id: 'discover',
            emoji: "🔍",
            title: "1. Discover",
            subtitle: "Khám phá vấn đề",
            color: "bg-purple-100",
            textColor: "text-purple-700",
            borderColor: "border-purple-200",
            activities: [
                {
                    title: "Kick-off Meeting",
                    subSteps: [
                        {
                            title: "Before the Meeting",
                            items: [
                                "Review: the project brief",
                                "List key questions: goals, scope, timeline",
                            ]
                        },
                        {
                            title: "During the Meeting",
                            items: [
                                "Align: on business and product goals",
                                "Define: target users and user context",
                                "Clarify: scope, constraints, and timeline",
                                "Confirm: team structure and communication channels"
                            ]
                        },
                        {
                            title: "After the Meeting",
                            items: [
                                "Summarize: meeting notes",
                                "Map: key stakeholders + their responsibilities",
                                "Create a design brief: Overview, Objectives, Key Stakeholders, Timeline, and Deliverables",
                                "Plan: initial user research approach"
                            ]
                        }
                    ],
                    deliverables: ["Kick-off summary", "Design brief", "Stakeholder map", "Initial timeline"]
                },
                {
                    title: "Market Research",
                    subSteps: [
                        {
                            title: "Desk Research & Trend Analysis",
                            items: [
                                "Industry Analysis: Review the latest industry trends and market dynamics",
                                "Visual Research: Create moodboards to capture visual trends and styles",
                                "Competitor Analysis: Benchmark key competitors' strengths / weaknesses",
                                "Gap Analysis: Identify unmet needs and emerging opportunities in the market"
                            ]
                        },
                        {
                            title: "Breakdown Development Journey",
                            items: [
                                "Journey Mapping: Map out the complete user journey from start to finish",
                                "Development Phases: Break down research, design, testing, and launch phases",
                                "Pain Point Analysis: Identify areas of friction and user dissatisfaction",
                                "Goal Alignment: Cross-reference findings with business objectives"
                            ]
                        },
                        {
                            title: "Identify Opportunities",
                            items: [
                                "User Needs Analysis: Spot opportunities from unmet user needs and problems",
                                "Trend Analysis: Look for emerging patterns in user behavior and technology",
                                "Feedback Analysis: Review user feedback and social media conversations",
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "User Research",
                    subSteps: [
                        {
                            title: "Define Research Questions",
                            items: [
                                "Clarify key research objectives: What do we need to understand about the users?",
                                "Formulate specific questions: users' goals, needs, frustrations, and behaviors.",
                            ]
                        },
                        {
                            title: "Research Methods",
                            items: [
                                "Interviews: Gain qualitative insights into their motivations, pain points, and behaviors.",
                                "Surveys: Collect quantitative data from a broader user base. Ensure focused on pain points, needs, and current solutions.",
                                "User Observation: In their natural environment to understand their context of use, interactions, and challenges in real time."
                            ]
                        },
                        {
                            title: "Understand Users",
                            items: [
                                "Who are the users: Based on demographics, behavior, and use cases.",
                                "What are their goals: Understand what users aim to achieve with the product.",
                                "What are their pain points + behaviors: Uncover frustrations, obstacles with current solutions.",
                                "Context of use: Understand the environment in which the product will be used, including devices, settings, and external factors that influence the UX."
                            ]
                        },
                        {
                            title: "Analyze and Synthesize Insights",
                            items: [
                                "Cluster findings: Group data into themes, such as goals, frustrations, motivations, and context.",
                                "Identify patterns: Look for recurring themes in user responses, behaviors, and needs.",
                                "Create personas: Based on user research, build personas that represent key user segments.",
                                "Map user journey: Visualize the steps users take to achieve their goals and the touchpoints they interact with."
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "Synthesize & Analyze",
                    subSteps: [
                        {
                            title: "Synthesize Insights",
                            items: [
                                "Validate assumptions: Re-examine based on user research findings. ",
                                "Group and synthesize findings: Organize into categories such as motivations, needs, frustrations, and goals.",
                                "Identify patterns: Look for common themes, such as recurring problems, behaviors, or opportunities.",
                                "Highlight key pain points: Based on data from interviews, surveys, and observations.",
                                "Usability issues: Identify such as confusing workflows, difficult navigation, or unclear interfaces.",
                                "Create personas: To represent different user segments, goals, behaviors, motivations, and frustrations.",
                                "Map user journey: Visualize the user's experience across various touchpoints, highlighting pain points and moments of delight.",
                                "Insight cards: Create a set of cards summarizing actionable key insights."
                            ]
                        },
                        {
                            title: "Analysis",
                            items: [
                                "Analyze competitors: Understand how they solve similar problems and identify strengths / weaknesses.",
                                "Evaluate pros/cons: Assess competitor offerings, noting their best features and areas for improvement. Compare with user needs / expectations.",
                                "Identify market opportunities: Where the competition falls short. Focus on unmet user needs or features that could add significant value."
                            ]
                        }
                    ]
                }

            ]
        },
        {
            id: 'define',
            emoji: "🧠",
            title: "2. Define",
            subtitle: "Xác định hướng đi",
            color: "bg-blue-100",
            textColor: "text-blue-700",
            borderColor: "border-blue-200",
            activities: [
                {
                    title: "Core Problem",
                    subSteps: [
                        {
                            title: "Analysis",
                            items: [
                                "Review: research insights",
                                "Identify: recurring user problems and frustrations",
                                "Frame: key problem statements (e.g. 'Users struggle to...')",
                                "Assess: impact on user experience and business outcomes"
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "Define Goals",
                    subSteps: [
                        {
                            title: "Set User Goals",
                            items: [
                                "Clarify: what the user needs to achieve",
                                "Break down: goals into clear, actionable, and behavior-driven outcomes"
                            ]
                        },
                        {
                            title: "Align with Business",
                            items: [
                                "Map: goals to business OKRs",
                                "Check: for conflicts or overlaps",
                                "Align: with product vision"
                            ]
                        },
                        {
                            title: "Define Constraints",
                            items: [
                                "Check: tech feasibility with devs",
                                "Consider: platform constraints (mobile/web)",
                                "Note: time and resource limitations"
                            ]
                        },
                        {
                            title: "Define Success Metrics",
                            items: [
                                "List: measurable KPIs (e.g. task completion rate)",
                                "Include: both quantitative + qualitative indicators",
                                "Define: how success will be validated post-launch"
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "User Flow / IA",
                    subSteps: [
                        {
                            title: "Define Structure",
                            items: [
                                "List: all use cases and core tasks",
                                "Break down: steps needed for each task",
                                "Identify: starting points and goals"
                            ]
                        },
                        {
                            title: "Design User Flows",
                            items: [
                                "Map: happy paths",
                                "Add: error flows and alternate paths",
                                "Ensure: clear entry and exit points"
                            ]
                        },
                        {
                            title: "Build IA",
                            items: [
                                "Create: sitemap or IA diagram",
                                "Group: screens/modules logically",
                                "Label: navigation elements clearly"
                            ]
                        },
                        {
                            title: "Validate Flows",
                            items: [
                                "Walk through: with devs/product team",
                                "Check: for dead ends or unclear loops",
                                "Update: flows based on feedback"
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "UI/UX Checklist",
                    subSteps: [
                        {
                            title: "UX: Experience Quality",
                            items: [
                                "Structure: ensure logical content hierarchy and clear user goals",
                                "Navigate: test for intuitive flows, visibility of key actions, and smooth interactions",
                                "Communicate: use clear CTAs, human language, and helpful prompts",
                                "Feedback: design for empty/loading/error states and real-time system feedback",
                                "Prevent: avoid errors through smart defaults, validations, and guidance",
                                "Access: follow WCAG basics – contrast, keyboard navigation, and readable text",
                                "Responsive: design fluid layouts and optimized tap targets across breakpoints"
                            ]
                        },
                        {
                            title: "UI: Interface Polish",
                            items: [
                                "Hierarchy: apply visual hierarchy using size, color, and spacing",
                                "Typography: check font sizes, line heights, and style consistency",
                                "Spacing: follow consistent layout grid (e.g., 4pt/8pt), ensure whitespace balance",
                                "Color: ensure brand usage, proper contrast, and clear interactive states",
                                "Consistency: unify buttons, fields, icons in style and behavior",
                                "Motion: apply meaningful microinteractions with smooth transitions",
                                "Imagery: ensure image/icon quality, relevance, and fallbacks"
                            ]
                        },
                        {
                            title: "Documentation",
                            items: [
                                "Explain: key design decisions and user logic behind them",
                                "Note: known usability or technical limitations",
                                "Link: to relevant specs, components, and design systems (Figma, Storybook...)"
                            ]
                        }
                    ]

                }

            ]
        },
        {
            id: 'ideate',
            emoji: "✏️",
            title: "3. Ideate & Prototype",
            subtitle: "Lên ý tưởng",
            color: "bg-yellow-100",
            textColor: "text-yellow-700",
            borderColor: "border-yellow-200",
            activities: [
                {
                    title: "Brainstorm",
                    subSteps: [
                        {
                            title: "Preparation",
                            items: [
                                "Gather: key user insights (pain points, goals, needs)",
                                "Rewrite: into How Might We (HMW) questions",
                                "Define: session goal (e.g. idea generation, solution finding)"
                            ]
                        },
                        {
                            title: "Ideation",
                            items: [
                                "Run: team workshop or solo brainstorm",
                                "Use: Crazy 8s or Rapid Sketching",
                                "Capture: all ideas without filtering",
                                "Cluster: ideas by themes or goals"
                            ]
                        },
                        {
                            title: "Evaluation",
                            items: [
                                "Use: Dot Voting with team/stakeholders",
                                "Plot: ideas on Impact vs. Effort matrix",
                                "Shortlist: 1–3 concepts to move forward"
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "Wireframe",
                    subSteps: [
                        {
                            title: "Sketch & Layout",
                            items: [
                                "Sketch: core screens in low-fidelity",
                                "Define: user flow: entry → task → exit",
                                "Highlight: key actions (clicks, scrolls, data entry)",
                                "Focus: on layout, logic, and information hierarchy"
                            ]
                        },
                        {
                            title: "Tools & Execution",
                            items: [
                                "Use: pen & paper, Whimsical, or Figma (lo-fi)",
                                "Review: for clarity and simplicity",
                                "Share: with team for feedback"
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "Hi-fi Prototype",
                    subSteps: [
                        {
                            title: "Build UI",
                            items: [
                                "Design: detailed screens in Figma (UI level)",
                                "Apply: brand colors, fonts, icons, and images",
                                "Design: responsive layout if needed"
                            ]
                        },
                        {
                            title: "Prototype",
                            items: [
                                "Use: Figma prototype feature to connect screens",
                                "Include: realistic interactions: click, hover, scroll",
                                "Scope: only key user flows (not full app)"
                            ]
                        },
                        {
                            title: "Test-ready Check",
                            items: [
                                "Run through: interaction sequence",
                                "Ensure: logical flow and visual clarity",
                                "Prepare: for usability test or feedback"
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "Finetune",
                    subSteps: [
                        {
                            title: "Final Evaluation",
                            items: [
                                "Peer review: for UI consistency and logic",
                                "Check: spacing, contrast, icons, font sizes",
                                "Validate: usability with PM / dev if needed"
                            ]
                        },
                        {
                            title: "Handoff Prep",
                            items: [
                                "Add design notes: spacing, hover, error states",
                                "Organize: layers and components in Figma",
                                "Ensure: all assets are labeled and grouped",
                                "Export or link: design system if used"
                            ]
                        }
                    ]
                }

            ]
        },
        {
            id: 'prototype',
            emoji: "🧪",
            title: "4. Test & Handoff",
            color: "bg-green-100",
            textColor: "text-green-700",
            borderColor: "border-green-200",
            activities: [

                {
                    title: "Usability Testing",
                    subSteps: [
                        {
                            title: "Preparation",
                            items: [
                                "Define: clear testing goals tied to key assumptions, usability risks, or design decisions",
                                "Recruit: representative users from your actual or intended target segment",
                                "Prepare: realistic tasks and scenarios that reflect critical user journeys and product flows"
                            ]
                        },
                        {
                            title: "Execution",
                            items: [
                                "Conduct: moderated or unmoderated sessions",
                                "Observe: user behaviors and struggles",
                                "Take: detailed notes or record sessions"
                            ]
                        },
                        {
                            title: "Feedback Analysis",
                            items: [
                                "Summarize: findings and usability issues",
                                "Identify: top pain points",
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "Quick Iteration",
                    subSteps: [
                        {
                            title: "Refinement",
                            items: [
                                "Analyze: usability feedback",
                                "Fix: high-priority issues",
                                "Update: flows or UI based on insights"
                            ]
                        },
                        {
                            title: "Validation",
                            items: [
                                "Quick re-test: updated screens (if needed)",
                                "Check: clarity and ease of use",
                                "Confirm: improvements with team or users"
                            ]
                        }
                    ]
                }
                ,
                {
                    title: "Handoff",
                    subSteps: [
                        {
                            title: "Design File Preparation",
                            items: [
                                "Clean up: naming, grouping, and frames",
                                "Organize: components and variants",
                                "Add: design notes for all states (error, hover, empty)"
                            ]
                        },
                        {
                            title: "Developer Documentation",
                            items: [
                                "Comment/annotate: in Figma or link to Notion",
                                "Explain: logic, behavior, and edge cases",
                                "Provide: tokens, spacing, and component/section rules"
                            ]
                        },
                        {
                            title: "Walkthrough",
                            items: [
                                "Host: a live dev walkthrough or record a video",
                                "Clarify: any remaining logic or UI interactions",
                                "Ensure: shared understanding"
                            ]
                        },
                        {
                            title: "Support During Development",
                            items: [
                                "Review implemented UI for accuracy",
                                "Log bugs or inconsistencies",
                                "Help polish final product (e.g. microinteractions)"
                            ]
                        },
                        {
                            title: "Reflection & Wrap-up",
                            items: [
                                "Review: design process as a team",
                                "Note: lessons learned",
                                "Archive: design files and document for future reference"
                            ]
                        }
                    ]
                }

            ]
        }
    ];

    // SVG Arrow component for the flow
    const Arrow = () => (
        <div className="flex-shrink-0 flex items-center">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );

    // Tooltip component
    const Tooltip = ({ activity, textColor, position }) => {
        const [tooltipPosition, setTooltipPosition] = useState({ x: position.x, y: position.y });

        useEffect(() => {
            // Get viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Get tooltip dimensions (using a ref would be more efficient in production)
            const tooltipWidth = 500; // width from style
            const tooltipHeight = document.querySelector('.tooltip-content')?.getBoundingClientRect().height || 400;

            // Calculate new position to ensure tooltip stays in viewport
            let newX = position.x + 16; // Default offset
            let newY = position.y - 20; // Default offset

            // Check right edge
            if (newX + tooltipWidth > viewportWidth) {
                newX = position.x - tooltipWidth - 16; // Show on the left side of the cursor
            }

            // Check bottom edge
            if (newY + tooltipHeight > viewportHeight) {
                newY = viewportHeight - tooltipHeight - 16; // Show above
            }

            // Check top edge
            if (newY < 16) {
                newY = 16; // Minimum top padding
            }

            // Check left edge
            if (newX < 16) {
                newX = 16; // Minimum left padding
            }

            setTooltipPosition({ x: newX, y: newY });
        }, [position]);

        return createPortal(
            <div
                className="fixed bg-white rounded-lg shadow-xl p-6 tooltip-content"
                style={{
                    zIndex: 9999,
                    width: '500px',
                    left: `${tooltipPosition.x}px`,
                    top: `${tooltipPosition.y}px`,
                    maxHeight: 'calc(100vh - 32px)', // Ensure it doesn't exceed viewport height
                    overflowY: 'auto' // Add scrolling if content is too tall
                }}
            >
                <div className="bg-white rounded-lg">
                    <div className="flex flex-col gap-8">
                        {activity.subSteps.map((step, idx) => (
                            <div key={idx} className="relative">
                                {/* Step number and connecting line */}
                                <div className="flex items-start gap-4">
                                    <div className={`flex flex-col items-center bg-[${textColor} rounded-full`}>
                                        <div className={`w-8 h-8 rounded-full ${textColor} bg-opacity-10 flex items-center justify-center font-semibold text-sm`}>
                                            {idx + 1}
                                        </div>
                                        {idx < activity.subSteps.length - 1 && (
                                            <div className="w-0.5 h-full bg-gray-200 absolute top-8 left-[15px]" />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <h4 className={`font-medium mb-3 ${textColor}`}>{step.title}</h4>
                                        <div className="space-y-3">
                                            {step.items.map((item, itemIdx) => {
                                                // Split item into headline and description if it contains ":"
                                                const parts = item.split(':').map(part => part.trim());
                                                const headline = parts[0];
                                                const description = parts.length > 1 ? parts[1] : '';

                                                return (
                                                    <div key={itemIdx} className="text-md">
                                                        <div className="flex items-start gap-2">
                                                            <div>
                                                                <span className="font-medium">{headline}</span>
                                                                {description && (
                                                                    <span className="text-gray-600 ml-1">{description}</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {activity.deliverables && (
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <h4 className={`font-medium mb-3 ${textColor}`}>Deliverables</h4>
                            <div className="space-y-2">
                                {activity.deliverables.map((item, idx) => (
                                    <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>,
            document.body
        );
    };

    // Activity component with tooltip
    const Activity = ({ activity, textColor, stageColor }) => {
        const [isHovered, setIsHovered] = useState(false);
        const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

        const handleMouseEnter = (e) => {
            setIsHovered(true);
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseMove = (e) => {
            if (isHovered) {
                setMousePos({ x: e.clientX, y: e.clientY });
            }
        };

        return (
            <div className="relative">
                <div
                    className={`${stageColor} overflow-visible p-4 rounded-lg border-2 cursor-pointer transition-all duration-0 min-w-[200px]
                        ${isHovered ? 'transform -translate-y-1 z-10' : 'transform translate-y-0'}`}
                    style={{ borderColor: activity.border }}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <h4 className={`font-medium ${textColor}`}>{activity.title}</h4>
                </div>

                {/* Render tooltip through portal */}
                {isHovered && activity.subSteps && (
                    <Tooltip
                        activity={activity}
                        textColor={textColor}
                        position={mousePos}
                    />
                )}
            </div>
        );
    };

    return (
        <div className="relative w-full">
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            {/* Main content */}
            <div className="relative z-10">
                {workflowStages.map((stage, index) => (
                    <div key={stage.id} className="mb-12 last:mb-0">
                        <div className="mb-4 ">
                            <div className="flex items-center gap-2">
                                <span className="text-3xl">{stage.emoji}</span>
                                <div>
                                    <h3 className={`font-bold text-xl ${stage.textColor}`}>{stage.title}</h3>
                                    {stage.subtitle && (
                                        <p className={`text-sm ${stage.textColor} opacity-75`}>{stage.subtitle}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Activities flow */}
                        <div className="flex items-center gap-4 overflow-visible pb-4">
                            {stage.activities.map((activity, idx) => (
                                <React.Fragment key={idx}>
                                    <Activity
                                        activity={{ ...activity, border: stage.borderColor }}
                                        textColor={stage.textColor}
                                        stageColor={stage.color}
                                    />
                                    {idx < stage.activities.length - 1 && (
                                        <Arrow />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkflowDiagram; 