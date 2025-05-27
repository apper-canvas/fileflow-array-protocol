import { ArrowLeft, MapPin, Clock, Users, Heart, Coffee, Plane, GraduationCap, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Careers = () => {
  const navigate = useNavigate()

  const handleApply = (position) => {
    toast.success(`Application process started for ${position} position!`)
  }

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build the next generation of file management solutions. You'll work on scalable systems, modern web technologies, and contribute to our core platform.",
      requirements: [
        "5+ years of software development experience",
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of software architecture patterns",
        "Experience with database design and optimization"
      ],
      responsibilities: [
        "Design and implement new features for our file management platform",
        "Collaborate with cross-functional teams to deliver high-quality solutions",
        "Mentor junior developers and contribute to technical discussions",
        "Optimize application performance and scalability",
        "Participate in code reviews and maintain coding standards"
      ]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead product strategy and roadmap for FileFlow. Work closely with engineering, design, and customer success teams to deliver exceptional user experiences.",
      requirements: [
        "3+ years of product management experience",
        "Experience with SaaS products and B2B markets",
        "Strong analytical and data-driven decision making skills",
        "Excellent communication and stakeholder management",
        "Experience with agile development methodologies"
      ],
      responsibilities: [
        "Define and execute product strategy and roadmap",
        "Gather and prioritize product requirements from stakeholders",
        "Work with engineering teams to deliver product features",
        "Analyze user feedback and market trends",
        "Collaborate with marketing and sales teams on go-to-market strategies"
      ]
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description: "Create intuitive and beautiful user experiences for our file management platform. Lead design initiatives and work closely with product and engineering teams.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Experience with design systems and component libraries",
        "Strong portfolio showcasing web and mobile designs",
        "Understanding of user research and usability testing"
      ],
      responsibilities: [
        "Design user interfaces and experiences for web and mobile applications",
        "Conduct user research and usability testing",
        "Create and maintain design systems and style guides",
        "Collaborate with product managers and engineers",
        "Present design concepts and rationale to stakeholders"
      ]
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former VP of Engineering at tech unicorn, passionate about simplifying file management."
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack engineer with 10+ years building scalable cloud platforms."
    },
    {
      id: 3,
      name: "Emily Thompson",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Product strategist focused on user-centric design and data-driven decisions."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Backend specialist with expertise in distributed systems and cloud architecture."
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Senior Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "UX/UI designer passionate about creating intuitive and accessible interfaces."
    },
    {
      id: 6,
      name: "James Wilson",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Infrastructure expert ensuring reliable, secure, and scalable platform operations."
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance. Mental health support and wellness programs."
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours. Modern office spaces with all amenities."
    },
    {
      icon: Plane,
      title: "Time Off",
      description: "Unlimited PTO policy. Company-wide winter break and summer Fridays."
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and professional development opportunities."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to FileFlow</span>
            </button>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Careers</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join the FileFlow Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the future of file management. We're looking for passionate individuals 
              who want to make a difference in how people organize and access their digital world.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Remote-First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Great Benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <span className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{job.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {job.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleApply(job.title)}
                    className="lg:ml-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Apply Now</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We believe in taking care of our team members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The passionate individuals behind FileFlow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100 dark:border-blue-900"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know 
            how you'd like to contribute to FileFlow.
          </p>
          <button
            onClick={() => toast.info('Please send your resume to careers@fileflow.com')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <Mail className="h-5 w-5" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Careers