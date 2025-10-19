/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Plus, Edit2, Trash2, Star } from "lucide-react"
import ProjectForm from "@/components/dashboard/project-form"

interface Project {
  _id: string
  title: string
  client: string
  services: string[]
  featured: boolean
  images: string[]
  createdAt: string
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/projects")
      setProjects(response.data)
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleEdit = (project: Project) => {
    setSelectedProject(project)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return

    try {
      await axios.delete(`/api/projects/${id}`)
      setProjects(projects.filter((p) => p._id !== id))
    } catch (error) {
      console.error("Error deleting project:", error)
    }
  }

  const handleToggleFeatured = async (project: Project) => {
    try {
      const response = await axios.put(`/api/projects/${project._id}`, {
        ...project,
        featured: !project.featured,
      })
      setProjects(projects.map((p) => (p._id === project._id ? response.data : p)))
    } catch (error) {
      console.error("Error updating project:", error)
    }
  }

  const handleFormClose = () => {
    setShowForm(false)
    setSelectedProject(null)
  }

  const handleFormSuccess = () => {
    handleFormClose()
    fetchProjects()
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-gray-400">Manage your portfolio projects</p>
        </div>
        <button
          onClick={() => {
            setSelectedProject(null)
            setShowForm(true)
          }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      {/* Projects Grid */}
      <div>
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading projects...</p>
            </div>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400">No projects yet. Create your first project!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group"
              >
                {/* Image */}
                <div className="relative h-48 bg-white/5 overflow-hidden">
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-semibold text-yellow-300">Featured</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.client}</p>
                  </div>

                  {/* Services */}
                  {project.services.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 2).map((service, index) => (
                        <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                      {project.services.length > 2 && (
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                          +{project.services.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-white/10">
                    <button
                      onClick={() => handleToggleFeatured(project)}
                      className="flex-1 p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-yellow-400 flex items-center justify-center gap-2"
                      title={project.featured ? "Unfeature" : "Feature"}
                    >
                      <Star className={`w-4 h-4 ${project.featured ? "fill-yellow-400" : ""}`} />
                    </button>
                    <button
                      onClick={() => handleEdit(project)}
                      className="flex-1 p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white flex items-center justify-center gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="flex-1 p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400 flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Form Modal */}
      {showForm && <ProjectForm project={selectedProject} onClose={handleFormClose} onSuccess={handleFormSuccess} />}
    </div>
  )
}
