import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import { toast } from 'react-toastify'
import jsPDF from 'jspdf'

const TermsAndConditions = () => {
  const downloadPDF = () => {
    try {
      const doc = new jsPDF()
      
      // Set font and title
      doc.setFontSize(20)
      doc.setFont('helvetica', 'bold')
      doc.text('FileFlow - Terms and Conditions', 20, 30)
      
      // Add last updated date
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text('Last updated: ' + new Date().toLocaleDateString(), 20, 40)
      
      // Add content
      doc.setFontSize(12)
      doc.setFont('helvetica', 'normal')
      
      const content = [
        { title: '1. Acceptance of Terms', text: 'By accessing and using FileFlow, you accept and agree to be bound by the terms and provision of this agreement.' },
        { title: '2. File Management Services', text: 'FileFlow provides file storage, organization, and management services. Users are responsible for their uploaded content.' },
        { title: '3. User Responsibilities', text: 'Users must not upload illegal, harmful, or copyrighted content without permission. Users are responsible for backing up their data.' },
        { title: '4. Privacy and Data Protection', text: 'We respect your privacy and handle your data according to our privacy policy. Files are stored securely but users should not upload sensitive personal information.' },
        { title: '5. Service Availability', text: 'We strive to maintain service availability but cannot guarantee 100% uptime. Users should maintain backups of important files.' },
        { title: '6. Limitation of Liability', text: 'FileFlow is provided "as is" without warranties. We are not liable for data loss, service interruptions, or damages arising from use of the service.' },
        { title: '7. Modifications to Terms', text: 'We reserve the right to modify these terms at any time. Users will be notified of significant changes.' },
        { title: '8. Contact Information', text: 'For questions about these terms, please contact us through the application support channels.' }
      ]
      
      let yPosition = 60
      
      content.forEach((section) => {
        // Check if we need a new page
        if (yPosition > 250) {
          doc.addPage()
          yPosition = 30
        }
        
        // Add section title
        doc.setFont('helvetica', 'bold')
        doc.text(section.title, 20, yPosition)
        yPosition += 10
        
        // Add section text with word wrapping
        doc.setFont('helvetica', 'normal')
        const splitText = doc.splitTextToSize(section.text, 170)
        doc.text(splitText, 20, yPosition)
        yPosition += splitText.length * 5 + 10
      })
      
      // Save the PDF
      doc.save('FileFlow-Terms-and-Conditions.pdf')
      toast.success('Terms and Conditions PDF downloaded successfully!')
    } catch (error) {
      console.error('Error generating PDF:', error)
      toast.error('Failed to generate PDF. Please try again.')
    }
  }

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
            <button
              onClick={downloadPDF}
              className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-soft p-8">
          {/* Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
              Terms and Conditions
            </h1>
            <p className="text-surface-600 dark:text-surface-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Terms Content */}
          <div className="prose prose-surface dark:prose-invert max-w-none">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                By accessing and using FileFlow, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                2. File Management Services
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                FileFlow provides file storage, organization, and management services. Our platform allows users to upload, 
                organize, and manage their digital files through an intuitive web interface. Users are responsible for their 
                uploaded content and must ensure they have the right to store and share any files uploaded to our service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
                Users agree to:
              </p>
              <ul className="list-disc list-inside text-surface-700 dark:text-surface-300 space-y-2 ml-4">
                <li>Not upload illegal, harmful, or copyrighted content without proper authorization</li>
                <li>Maintain appropriate backups of their important data</li>
                <li>Use the service in accordance with applicable laws and regulations</li>
                <li>Not attempt to compromise the security or integrity of our systems</li>
                <li>Respect the storage limits and usage guidelines provided</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                4. Privacy and Data Protection
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                We respect your privacy and are committed to protecting your personal data. Files are stored securely using 
                industry-standard encryption and security measures. However, users should exercise caution when uploading 
                sensitive personal information. We recommend reviewing our Privacy Policy for detailed information about 
                data collection, processing, and protection practices.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                5. Service Availability
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                While we strive to maintain high service availability and reliability, we cannot guarantee 100% uptime. 
                Scheduled maintenance, system updates, and unforeseen technical issues may occasionally affect service 
                availability. Users are encouraged to maintain local backups of critical files and not rely solely on 
                our service for file storage.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                FileFlow is provided "as is" without warranties of any kind, either express or implied. We shall not be 
                liable for any data loss, service interruptions, or damages arising from the use of our service. Users 
                acknowledge that they use the service at their own risk and agree to maintain appropriate backups of 
                their data.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                7. Modifications to Terms
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                We reserve the right to modify these terms and conditions at any time. Users will be notified of 
                significant changes through the application interface or via email. Continued use of the service after 
                modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                8. Contact Information
              </h2>
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us through the application's 
                support channels or feedback mechanisms. We are committed to addressing user concerns and providing 
                clarification on our policies when needed.
              </p>
            </div>
          </div>

          {/* Download Section */}
          <div className="mt-12 pt-8 border-t border-surface-200 dark:border-surface-700">
            <div className="text-center">
              <p className="text-surface-600 dark:text-surface-400 mb-4">
                Need a copy for your records?
              </p>
              <button
                onClick={downloadPDF}
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md font-medium"
              >
                <Download className="w-5 h-5" />
                <span>Download Terms as PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions