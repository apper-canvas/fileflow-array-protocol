import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'
import { format } from 'date-fns'

const MainFeature = () => {
  const [currentPath, setCurrentPath] = useState('/')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [selectedItems, setSelectedItems] = useState([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadProgress, setUploadProgress] = useState({})
  const [showNewFolderModal, setShowNewFolderModal] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')
  const fileInputRef = useRef(null)

  // Mock file system data
  const [fileSystem, setFileSystem] = useState({
    '/': {
      folders: [
        { id: '1', name: 'Documents', path: '/Documents', createdAt: new Date('2024-01-15'), childrenCount: 12 },
        { id: '2', name: 'Images', path: '/Images', createdAt: new Date('2024-01-20'), childrenCount: 8 },
        { id: '3', name: 'Projects', path: '/Projects', createdAt: new Date('2024-02-01'), childrenCount: 5 }
      ],
      files: [
        { id: '4', name: 'README.md', path: '/README.md', size: 2048, type: 'text/markdown', createdAt: new Date('2024-01-10') },
        { id: '5', name: 'presentation.pdf', path: '/presentation.pdf', size: 1024000, type: 'application/pdf', createdAt: new Date('2024-01-25') }
      ]
    },
    '/Documents': {
      folders: [
        { id: '6', name: 'Reports', path: '/Documents/Reports', createdAt: new Date('2024-01-16'), childrenCount: 3 }
      ],
      files: [
        { id: '7', name: 'contract.docx', path: '/Documents/contract.docx', size: 45000, type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', createdAt: new Date('2024-01-18') },
        { id: '8', name: 'budget.xlsx', path: '/Documents/budget.xlsx', size: 32000, type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', createdAt: new Date('2024-01-22') }
      ]
    }
  })

  const getCurrentItems = () => {
    return fileSystem[currentPath] || { folders: [], files: [] }
  }

  const getFileIcon = (type) => {
    if (type?.includes('image')) return 'Image'
    if (type?.includes('video')) return 'Video'
    if (type?.includes('audio')) return 'Music'
    if (type?.includes('pdf')) return 'FileText'
    if (type?.includes('word') || type?.includes('document')) return 'FileText'
    if (type?.includes('spreadsheet') || type?.includes('excel')) return 'FileSpreadsheet'
    if (type?.includes('zip') || type?.includes('rar')) return 'Archive'
    return 'File'
  }

  const getFileIconClass = (type) => {
    if (type?.includes('image')) return 'file-icon-image'
    if (type?.includes('video')) return 'file-icon-video'
    if (type?.includes('audio')) return 'file-icon-audio'
    if (type?.includes('pdf') || type?.includes('document')) return 'file-icon-document'
    if (type?.includes('zip') || type?.includes('rar')) return 'file-icon-archive'
    return 'file-icon-default'
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const navigateToFolder = (folderPath) => {
    setCurrentPath(folderPath)
    setSelectedItems([])
  }

  const navigateUp = () => {
    if (currentPath === '/') return
    const parentPath = currentPath.split('/').slice(0, -1).join('/') || '/'
    setCurrentPath(parentPath)
    setSelectedItems([])
  }

  const getBreadcrumbs = () => {
    if (currentPath === '/') return [{ name: 'Root', path: '/' }]
    const parts = currentPath.split('/').filter(Boolean)
    const breadcrumbs = [{ name: 'Root', path: '/' }]
    
    let currentBreadcrumbPath = ''
    parts.forEach(part => {
      currentBreadcrumbPath += '/' + part
      breadcrumbs.push({ name: part, path: currentBreadcrumbPath })
    })
    
    return breadcrumbs
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragOver(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    handleFileUpload(files)
  }

  const handleFileUpload = (files) => {
    files.forEach(file => {
      const uploadId = Date.now() + Math.random()
      setUploadProgress(prev => ({
        ...prev,
        [uploadId]: { fileName: file.name, progress: 0 }
      }))

      // Simulate upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += Math.random() * 20
        if (progress >= 100) {
          progress = 100
          clearInterval(interval)
          
          // Add file to current directory
          const newFile = {
            id: Date.now().toString() + Math.random(),
            name: file.name,
            path: currentPath + '/' + file.name,
            size: file.size,
            type: file.type,
            createdAt: new Date()
          }
          
          setFileSystem(prev => ({
            ...prev,
            [currentPath]: {
              ...prev[currentPath],
              files: [...(prev[currentPath]?.files || []), newFile]
            }
          }))
          
          setTimeout(() => {
            setUploadProgress(prev => {
              const updated = { ...prev }
              delete updated[uploadId]
              return updated
            })
            toast.success(`${file.name} uploaded successfully!`)
          }, 500)
        }
        
        setUploadProgress(prev => ({
          ...prev,
          [uploadId]: { ...prev[uploadId], progress }
        }))
      }, 100)
    })
  }

  const createFolder = () => {
    if (!newFolderName.trim()) return
    
    const newFolder = {
      id: Date.now().toString(),
      name: newFolderName,
      path: currentPath + '/' + newFolderName,
      createdAt: new Date(),
      childrenCount: 0
    }
    
    setFileSystem(prev => ({
      ...prev,
      [currentPath]: {
        ...prev[currentPath],
        folders: [...(prev[currentPath]?.folders || []), newFolder]
      },
      [newFolder.path]: { folders: [], files: [] }
    }))
    
    setNewFolderName('')
    setShowNewFolderModal(false)
    toast.success(`Folder "${newFolderName}" created successfully!`)
  }

  const deleteSelected = () => {
    if (selectedItems.length === 0) return
    
    setFileSystem(prev => {
      const updated = { ...prev }
      const current = { ...updated[currentPath] }
      
      selectedItems.forEach(itemId => {
        current.folders = current.folders.filter(f => f.id !== itemId)
        current.files = current.files.filter(f => f.id !== itemId)
      })
      
      updated[currentPath] = current
      return updated
    })
    
    toast.success(`${selectedItems.length} item(s) deleted successfully!`)
    setSelectedItems([])
  }

  const toggleSelection = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const { folders, files } = getCurrentItems()

  return (
    <div className="flex h-screen bg-white dark:bg-surface-900">
      {/* Sidebar */}
      <div className="w-64 bg-surface-50 dark:bg-surface-800 border-r border-surface-200 dark:border-surface-700 hidden lg:block">
        <div className="p-4">
          <h2 className="text-sm font-semibold text-surface-900 dark:text-surface-100 mb-4">
            Quick Access
          </h2>
          <nav className="space-y-2">
            {[
              { name: 'All Files', icon: 'Folder', path: '/' },
              { name: 'Documents', icon: 'FileText', path: '/Documents' },
              { name: 'Images', icon: 'Image', path: '/Images' },
              { name: 'Projects', icon: 'Code', path: '/Projects' }
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => navigateToFolder(item.path)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                  currentPath === item.path
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700'
                }`}
              >
                <ApperIcon name={item.icon} className="h-5 w-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="bg-white dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
              {getBreadcrumbs().map((crumb, index) => (
                <div key={crumb.path} className="flex items-center space-x-2 flex-shrink-0">
                  {index > 0 && (
                    <ApperIcon name="ChevronRight" className="h-4 w-4 text-surface-400" />
                  )}
                  <button
                    onClick={() => navigateToFolder(crumb.path)}
                    className="text-sm font-medium text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {crumb.name}
                  </button>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowNewFolderModal(true)}
                className="inline-flex items-center px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <ApperIcon name="FolderPlus" className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">New Folder</span>
              </button>
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center px-3 py-2 bg-accent hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <ApperIcon name="Upload" className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Upload</span>
              </button>

              {selectedItems.length > 0 && (
                <button
                  onClick={deleteSelected}
                  className="inline-flex items-center px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  <ApperIcon name="Trash2" className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Delete ({selectedItems.length})</span>
                </button>
              )}

              <div className="flex items-center border border-surface-200 dark:border-surface-600 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-surface-100 dark:bg-surface-700' : ''} rounded-l-lg transition-colors duration-200`}
                >
                  <ApperIcon name="Grid3X3" className="h-4 w-4 text-surface-600 dark:text-surface-400" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-surface-100 dark:bg-surface-700' : ''} rounded-r-lg transition-colors duration-200`}
                >
                  <ApperIcon name="List" className="h-4 w-4 text-surface-600 dark:text-surface-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* File Area */}
        <div 
          className={`flex-1 p-4 overflow-auto ${isDragOver ? 'drag-over' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Upload Progress */}
          <AnimatePresence>
            {Object.entries(uploadProgress).map(([id, upload]) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Uploading {upload.fileName}
                  </span>
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {Math.round(upload.progress)}%
                  </span>
                </div>
                <div className="w-full bg-primary-100 dark:bg-primary-900 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${upload.progress}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}
          {folders.length === 0 && files.length === 0 && Object.keys(uploadProgress).length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 file-upload-zone rounded-2xl">
              <ApperIcon name="Upload" className="h-12 w-12 text-surface-400 mb-4" />
              <h3 className="text-lg font-medium text-surface-900 dark:text-surface-100 mb-2">
                Drop files here to upload
              </h3>
              <p className="text-surface-500 dark:text-surface-400 text-center max-w-sm">
                Drag and drop files anywhere in this area, or click the upload button to browse files.
              </p>
            </div>
          ) : (
            /* File Grid/List */
            <div className={viewMode === 'grid' ? 'file-grid' : 'space-y-2'}>
              {/* Up Navigation */}
              {currentPath !== '/' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${viewMode === 'grid' ? 'col-span-full' : ''} mb-4`}
                >
                  <button
                    onClick={navigateUp}
                    className="flex items-center space-x-3 p-3 w-full text-left rounded-lg border border-surface-200 dark:border-surface-600 hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors duration-200"
                  >
                    <ApperIcon name="ArrowUp" className="h-5 w-5 text-surface-500" />
                    <span className="text-sm font-medium text-surface-600 dark:text-surface-300">
                      Back to parent folder
                    </span>
                  </button>
                </motion.div>
              )}

              {/* Folders */}
              {folders.map((folder, index) => (
                <motion.div
                  key={folder.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group relative ${viewMode === 'grid' ? 'p-4' : 'flex items-center p-3'} bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 hover:shadow-card hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-200 cursor-pointer ${
                    selectedItems.includes(folder.id) ? 'ring-2 ring-primary-500 bg-primary-50 dark:bg-primary-900/20' : ''
                  }`}
                  onClick={(e) => {
                    if (e.ctrlKey || e.metaKey) {
                      toggleSelection(folder.id)
                    } else {
                      navigateToFolder(folder.path)
                    }
                  }}
                >
                  <div className={`${viewMode === 'grid' ? 'text-center' : 'flex items-center flex-1'}`}>
                    <div className={`${viewMode === 'grid' ? 'mb-3' : 'mr-3'}`}>
                      <ApperIcon 
                        name="Folder" 
                        className={`${viewMode === 'grid' ? 'h-8 w-8 mx-auto' : 'h-6 w-6'} file-icon-folder`} 
                      />
                    </div>
                    <div className={`${viewMode === 'grid' ? '' : 'flex-1'}`}>
                      <h3 className={`font-medium text-surface-900 dark:text-surface-100 ${viewMode === 'grid' ? 'text-sm mb-1' : 'text-sm'}`}>
                        {folder.name}
                      </h3>
                      <p className="text-xs text-surface-500 dark:text-surface-400">
                        {folder.childrenCount} items • {format(folder.createdAt, 'MMM d, yyyy')}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSelection(folder.id)
                    }}
                    className={`absolute top-2 right-2 w-5 h-5 rounded border-2 border-surface-300 dark:border-surface-600 ${
                      selectedItems.includes(folder.id) 
                        ? 'bg-primary-500 border-primary-500' 
                        : 'bg-white dark:bg-surface-800'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center`}
                  >
                    {selectedItems.includes(folder.id) && (
                      <ApperIcon name="Check" className="h-3 w-3 text-white" />
                    )}
                  </button>
                </motion.div>
              ))}

              {/* Files */}
              {files.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (folders.length + index) * 0.05 }}
                  className={`group relative ${viewMode === 'grid' ? 'p-4' : 'flex items-center p-3'} bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 hover:shadow-card hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-200 cursor-pointer ${
                    selectedItems.includes(file.id) ? 'ring-2 ring-primary-500 bg-primary-50 dark:bg-primary-900/20' : ''
                  }`}
                  onClick={(e) => {
                    if (e.ctrlKey || e.metaKey) {
                      toggleSelection(file.id)
                    }
                  }}
                >
                  <div className={`${viewMode === 'grid' ? 'text-center' : 'flex items-center flex-1'}`}>
                    <div className={`${viewMode === 'grid' ? 'mb-3' : 'mr-3'}`}>
                      <ApperIcon 
                        name={getFileIcon(file.type)} 
                        className={`${viewMode === 'grid' ? 'h-8 w-8 mx-auto' : 'h-6 w-6'} ${getFileIconClass(file.type)}`} 
                      />
                    </div>
                    <div className={`${viewMode === 'grid' ? '' : 'flex-1'}`}>
                      <h3 className={`font-medium text-surface-900 dark:text-surface-100 ${viewMode === 'grid' ? 'text-sm mb-1' : 'text-sm'} truncate`}>
                        {file.name}
                      </h3>
                      <p className="text-xs text-surface-500 dark:text-surface-400">
                        {formatFileSize(file.size)} • {format(file.createdAt, 'MMM d, yyyy')}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSelection(file.id)
                    }}
                    className={`absolute top-2 right-2 w-5 h-5 rounded border-2 border-surface-300 dark:border-surface-600 ${
                      selectedItems.includes(file.id) 
                        ? 'bg-primary-500 border-primary-500' 
                        : 'bg-white dark:bg-surface-800'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center`}
                  >
                    {selectedItems.includes(file.id) && (
                      <ApperIcon name="Check" className="h-3 w-3 text-white" />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => handleFileUpload(Array.from(e.target.files))}
        />

        {/* New Folder Modal */}
        <AnimatePresence>
          {showNewFolderModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowNewFolderModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-surface-800 rounded-xl p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">
                  Create New Folder
                </h3>
                <input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="Folder name"
                  className="w-full px-3 py-2 border border-surface-300 dark:border-surface-600 rounded-lg bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  onKeyDown={(e) => e.key === 'Enter' && createFolder()}
                  autoFocus
                />
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setShowNewFolderModal(false)}
                    className="px-4 py-2 text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={createFolder}
                    className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
                  >
                    Create
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MainFeature