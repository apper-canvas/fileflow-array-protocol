import { Link } from 'react-router-dom'
import ApperIcon from '../components/ApperIcon'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-surface-100 dark:bg-surface-800 rounded-full mb-4">
            <ApperIcon name="FileX" className="h-10 w-10 text-surface-400 dark:text-surface-500" />
          </div>
          <h1 className="text-4xl font-bold text-surface-900 dark:text-surface-100 mb-2">
            404
          </h1>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
            Oops! The file you're looking for doesn't exist.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors duration-200 shadow-soft"
        >
          <ApperIcon name="Home" className="h-5 w-5 mr-2" />
          Back to FileFlow
        </Link>
      </div>
    </div>
  )
}

export default NotFound