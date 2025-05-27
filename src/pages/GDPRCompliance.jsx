import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Lock, Eye, Download, Trash2, UserCheck } from 'lucide-react'

const GDPRCompliance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-surface-800/80 backdrop-blur-sm border-b border-surface-200 dark:border-surface-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-surface-600 dark:text-surface-300 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to FileFlow</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-surface-600 dark:text-surface-300">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-8">
          {/* Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
              GDPR Compliance
            </h1>
            <p className="text-surface-600 dark:text-surface-400">
              Your privacy and data protection rights under the General Data Protection Regulation
            </p>
          </div>

          {/* Overview */}
          <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800">
            <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3 flex items-center">
              <UserCheck className="w-5 h-5 mr-2 text-green-600" />
              Our Commitment to Your Privacy
            </h2>
            <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
              FileFlow is committed to protecting your personal data and respecting your privacy rights. 
              We comply with the General Data Protection Regulation (GDPR) and provide you with full 
              transparency about how we collect, use, and protect your information.
            </p>
          </div>

          {/* GDPR Content */}
          <div className="prose prose-surface dark:prose-invert max-w-none">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-blue-600" />
                1. What Data We Collect
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
                We collect and process the following types of personal data:
              </p>
              <ul className="list-disc list-inside text-surface-700 dark:text-surface-300 space-y-2 ml-4">
                <li><strong>File Data:</strong> Files you upload, including metadata such as file names, sizes, and upload timestamps</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage analytics</li>
                <li><strong>Account Data:</strong> Email address and authentication information (if accounts are implemented)</li>
                <li><strong>Usage Data:</strong> How you interact with our service, features used, and performance data</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                2. Legal Basis for Processing
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-surface-700 dark:text-surface-300 space-y-2 ml-4">
                <li><strong>Consent:</strong> For file storage and management services when you actively use our platform</li>
                <li><strong>Legitimate Interest:</strong> For service improvement, security, and technical maintenance</li>
                <li><strong>Legal Obligation:</strong> When required by law to retain certain data or respond to legal requests</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                3. Your Rights Under GDPR
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-surface-50 dark:bg-surface-700/50 rounded-lg">
                  <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Right to Access</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Request a copy of the personal data we hold about you
                  </p>
                </div>
                
                <div className="p-4 bg-surface-50 dark:bg-surface-700/50 rounded-lg">
                  <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Right to Rectification</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Request correction of inaccurate or incomplete data
                  </p>
                </div>
                
                <div className="p-4 bg-surface-50 dark:bg-surface-700/50 rounded-lg">
                  <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Right to Erasure</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Request deletion of your personal data ("right to be forgotten")
                  </p>
                </div>
                
                <div className="p-4 bg-surface-50 dark:bg-surface-700/50 rounded-lg">
                  <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Right to Portability</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Request your data in a portable format for transfer
                  </p>
                </div>
                
                <div className="p-4 bg-surface-50 dark:bg-surface-700/50 rounded-lg">
                  <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Right to Object</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Object to processing based on legitimate interests
                  </p>
                </div>
                
                <div className="p-4 bg-surface-50 dark:bg-surface-700/50 rounded-lg">
                  <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Right to Restrict</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">
                    Request limitation of processing in certain circumstances
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-purple-600" />
                4. Data Security
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data:
              </p>
              <ul className="list-disc list-inside text-surface-700 dark:text-surface-300 space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure data centers with physical protection</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                5. Data Retention
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
                We retain your personal data only for as long as necessary:
              </p>
              <ul className="list-disc list-inside text-surface-700 dark:text-surface-300 space-y-2 ml-4">
                <li><strong>File Data:</strong> Retained while you actively use the service or until deletion is requested</li>
                <li><strong>Technical Logs:</strong> Typically retained for 30-90 days for security and debugging purposes</li>
                <li><strong>Account Data:</strong> Retained until account deletion or 2 years of inactivity</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                6. Third-Party Sharing
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
                We do not sell your personal data. We may share data only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-surface-700 dark:text-surface-300 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> With trusted third parties who help us operate our service (cloud storage, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets (with notice to users)</li>
                <li><strong>Consent:</strong> When you explicitly consent to sharing with specific third parties</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                7. International Transfers
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                If we transfer your data outside the European Economic Area (EEA), we ensure appropriate 
                safeguards are in place, such as Standard Contractual Clauses or adequacy decisions. 
                We will inform you of any such transfers and the safeguards applied.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                8. Exercising Your Rights
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
                To exercise any of your GDPR rights, please contact us using the information below. 
                We will respond to your request within 30 days and may ask for identification to verify your identity.
              </p>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Data Protection Contact</h3>
                <p className="text-surface-700 dark:text-surface-300 text-sm">
                  Email: privacy@fileflow.app<br />
                  Subject: GDPR Request - [Your Request Type]<br />
                  Include: Your name, email, and specific request details
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                9. Complaints and Supervisory Authority
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                If you believe we have not handled your personal data properly, you have the right to 
                lodge a complaint with your local data protection authority. You can also contact us 
                directly to resolve any concerns about our data processing practices.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                10. Updates to This Policy
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                We may update this GDPR compliance information from time to time to reflect changes 
                in our practices or legal requirements. We will notify you of any material changes 
                through the application interface or via email.
              </p>
              <p className="text-sm text-surface-500 dark:text-surface-400 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-surface-200 dark:border-surface-700">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">
                Questions About Your Data Rights?
              </h3>
              <p className="text-surface-600 dark:text-surface-400 mb-6">
                Our data protection team is here to help you understand and exercise your GDPR rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@fileflow.app?subject=GDPR Inquiry"
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md font-medium"
                >
                  <span>Contact Data Protection Team</span>
                </a>
                <Link
                  to="/terms"
                  className="inline-flex items-center space-x-2 bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-700 dark:text-surface-300 px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md font-medium"
                >
                  <span>View Terms & Conditions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GDPRCompliance