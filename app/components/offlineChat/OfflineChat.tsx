"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { v4 as uuidv4 } from "uuid"
import { Search, Plus, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

// Schéma de validation pour le formulaire de question
const questionFormSchema = z.object({
  title: z.string().min(5, {
    message: "Le titre doit contenir au moins 5 caractères.",
  }),
  content: z.string().min(10, {
    message: "La question doit contenir au moins 10 caractères.",
  }),
  tags: z.string().optional(),
})

// Schéma de validation pour le formulaire de réponse
const answerFormSchema = z.object({
  content: z.string().min(10, {
    message: "La réponse doit contenir au moins 10 caractères.",
  }),
})

// Types pour les données
type Answer = {
  id: string
  content: string
  author: string
  timestamp: number
  upvotes: number
  downvotes: number
}

type Question = {
  id: string
  title: string
  content: string
  author: string
  timestamp: number
  tags: string[]
  answers: Answer[]
  views: number
}

// Données initiales pour les questions
const initialQuestions: Question[] = [
  {
    id: "q1",
    title: "Comment utiliser React avec TypeScript?",
    content: "Je débute avec React et TypeScript. Quelles sont les meilleures pratiques pour les utiliser ensemble?",
    author: "user1",
    timestamp: Date.now() - 86400000 * 2, // 2 jours avant
    tags: ["react", "typescript", "frontend"],
    answers: [
      {
        id: "a1",
        content:
          "Pour utiliser React avec TypeScript, commencez par créer un projet avec Create React App en utilisant le template TypeScript: `npx create-react-app mon-app --template typescript`. Ensuite, assurez-vous de typer vos props et votre état correctement.",
        author: "expert1",
        timestamp: Date.now() - 86400000,
        upvotes: 5,
        downvotes: 0,
      },
    ],
    views: 42,
  },
  {
    id: "q2",
    title: "Quelle est la différence entre let et const en JavaScript?",
    content:
      "Je ne comprends pas bien quand utiliser let et quand utiliser const. Pouvez-vous m'expliquer la différence?",
    author: "user2",
    timestamp: Date.now() - 86400000 * 5, // 5 jours avant
    tags: ["javascript", "es6", "variables"],
    answers: [
      {
        id: "a2",
        content:
          "La principale différence est que `const` crée une référence qui ne peut pas être réassignée, tandis que `let` permet la réassignation. Cependant, avec `const`, les propriétés d'un objet peuvent toujours être modifiées.",
        author: "expert2",
        timestamp: Date.now() - 86400000 * 4,
        upvotes: 8,
        downvotes: 1,
      },
      {
        id: "a3",
        content:
          "Utilisez `const` par défaut, et `let` uniquement lorsque vous savez que la valeur va changer. Cela rend votre code plus prévisible.",
        author: "expert3",
        timestamp: Date.now() - 86400000 * 3,
        upvotes: 12,
        downvotes: 0,
      },
    ],
    views: 87,
  },
]

export default function QuestionsAnswers() {
  // États
  const [questions, setQuestions] = useState<Question[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("recent")
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null)
  const [openQuestionDialog, setOpenQuestionDialog] = useState(false)
  const [openAnswerDialog, setOpenAnswerDialog] = useState(false)

  // Formulaires
  const questionForm = useForm<z.infer<typeof questionFormSchema>>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: "",
    },
  })

  const answerForm = useForm<z.infer<typeof answerFormSchema>>({
    resolver: zodResolver(answerFormSchema),
    defaultValues: {
      content: "",
    },
  })

  // Charger les questions depuis localStorage ou utiliser les données initiales
  useEffect(() => {
    const storedQuestions = localStorage.getItem("qaQuestions")
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions))
    } else {
      setQuestions(initialQuestions)
      localStorage.setItem("qaQuestions", JSON.stringify(initialQuestions))
    }
  }, [])

  // Sauvegarder les questions dans localStorage quand elles changent
  useEffect(() => {
    if (questions.length > 0) {
      localStorage.setItem("qaQuestions", JSON.stringify(questions))
    }
  }, [questions])

  // Filtrer les questions en fonction de la recherche
  const filteredQuestions = questions.filter(
    (question) =>
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  // Trier les questions selon l'onglet actif
  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (activeTab === "recent") {
      return b.timestamp - a.timestamp
    } else if (activeTab === "popular") {
      return b.views - a.views
    } else if (activeTab === "unanswered") {
      return a.answers.length - b.answers.length
    }
    return 0
  })

  // Soumettre une nouvelle question
  const onSubmitQuestion = (values: z.infer<typeof questionFormSchema>) => {
    const newQuestion: Question = {
      id: uuidv4(),
      title: values.title,
      content: values.content,
      author: "utilisateur", // Idéalement, utilisez l'identifiant de l'utilisateur connecté
      timestamp: Date.now(),
      tags: values.tags ? values.tags.split(",").map((tag) => tag.trim()) : [],
      answers: [],
      views: 0,
    }

    setQuestions((prev) => [newQuestion, ...prev])
    questionForm.reset()
    setOpenQuestionDialog(false)
  }

  // Soumettre une nouvelle réponse
  const onSubmitAnswer = (values: z.infer<typeof answerFormSchema>) => {
    if (!selectedQuestion) return

    const newAnswer: Answer = {
      id: uuidv4(),
      content: values.content,
      author: "utilisateur", // Idéalement, utilisez l'identifiant de l'utilisateur connecté
      timestamp: Date.now(),
      upvotes: 0,
      downvotes: 0,
    }

    const updatedQuestions = questions.map((q) => {
      if (q.id === selectedQuestion.id) {
        return {
          ...q,
          answers: [...q.answers, newAnswer],
        }
      }
      return q
    })

    setQuestions(updatedQuestions)
    answerForm.reset()
    setOpenAnswerDialog(false)
  }

  // Voir les détails d'une question
  const viewQuestion = (question: Question) => {
    // Incrémenter le compteur de vues
    const updatedQuestions = questions.map((q) => {
      if (q.id === question.id) {
        return {
          ...q,
          views: q.views + 1,
        }
      }
      return q
    })

    setQuestions(updatedQuestions)
    setSelectedQuestion(question)
  }

  // Voter pour une réponse
  const voteAnswer = (questionId: string, answerId: string, voteType: "up" | "down") => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === questionId) {
        const updatedAnswers = q.answers.map((a) => {
          if (a.id === answerId) {
            return {
              ...a,
              upvotes: voteType === "up" ? a.upvotes + 1 : a.upvotes,
              downvotes: voteType === "down" ? a.downvotes + 1 : a.downvotes,
            }
          }
          return a
        })
        return {
          ...q,
          answers: updatedAnswers,
        }
      }
      return q
    })

    setQuestions(updatedQuestions)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="text-2xl font-bold">Questions & Réponses</CardTitle>
            <div className="flex gap-2">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Dialog open={openQuestionDialog} onOpenChange={setOpenQuestionDialog}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Poser une question
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                  <DialogHeader>
                    <DialogTitle>Poser une nouvelle question</DialogTitle>
                  </DialogHeader>
                  <Form {...questionForm}>
                    <form onSubmit={questionForm.handleSubmit(onSubmitQuestion)} className="space-y-4">
                      <FormField
                        control={questionForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Titre</FormLabel>
                            <FormControl>
                              <Input placeholder="Titre de votre question" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={questionForm.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Question</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Décrivez votre question en détail..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={questionForm.control}
                        name="tags"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tags (séparés par des virgules)</FormLabel>
                            <FormControl>
                              <Input placeholder="react, javascript, css" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end">
                        <Button type="submit">Publier la question</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recent" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="recent">Récentes</TabsTrigger>
              <TabsTrigger value="popular">Populaires</TabsTrigger>
              <TabsTrigger value="unanswered">Sans réponse</TabsTrigger>
            </TabsList>

            {selectedQuestion ? (
              <div className="space-y-6">
                <Button variant="ghost" onClick={() => setSelectedQuestion(null)} className="mb-2">
                  ← Retour aux questions
                </Button>

                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold">{selectedQuestion.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>Posée {format(selectedQuestion.timestamp, "dd MMM yyyy", { locale: fr })}</span>
                      <span>•</span>
                      <span>Vues: {selectedQuestion.views}</span>
                      <span>•</span>
                      <span>Par: {selectedQuestion.author}</span>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="whitespace-pre-line">{selectedQuestion.content}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedQuestion.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">
                        {selectedQuestion.answers.length} Réponse{selectedQuestion.answers.length !== 1 ? "s" : ""}
                      </h3>
                      <Dialog open={openAnswerDialog} onOpenChange={setOpenAnswerDialog}>
                        <DialogTrigger asChild>
                          <Button>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Répondre
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px]">
                          <DialogHeader>
                            <DialogTitle>Ajouter une réponse</DialogTitle>
                          </DialogHeader>
                          <Form {...answerForm}>
                            <form onSubmit={answerForm.handleSubmit(onSubmitAnswer)} className="space-y-4">
                              <FormField
                                control={answerForm.control}
                                name="content"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Votre réponse</FormLabel>
                                    <FormControl>
                                      <Textarea
                                        placeholder="Rédigez votre réponse..."
                                        className="min-h-[150px]"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <div className="flex justify-end">
                                <Button type="submit">Publier la réponse</Button>
                              </div>
                            </form>
                          </Form>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {selectedQuestion.answers.length > 0 ? (
                      <div className="space-y-4">
                        {selectedQuestion.answers
                          .sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes))
                          .map((answer) => (
                            <div key={answer.id} className="border rounded-lg p-4">
                              <div className="flex gap-4">
                                <div className="flex flex-col items-center gap-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => voteAnswer(selectedQuestion.id, answer.id, "up")}
                                  >
                                    <ThumbsUp className="h-4 w-4" />
                                  </Button>
                                  <span className="text-sm font-medium">{answer.upvotes - answer.downvotes}</span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => voteAnswer(selectedQuestion.id, answer.id, "down")}
                                  >
                                    <ThumbsDown className="h-4 w-4" />
                                  </Button>
                                </div>
                                <div className="flex-1">
                                  <p className="whitespace-pre-line">{answer.content}</p>
                                  <div className="flex justify-end mt-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <Avatar className="h-6 w-6">
                                        <div className="bg-primary text-primary-foreground text-xs flex items-center justify-center h-full w-full">
                                          {answer.author.charAt(0).toUpperCase()}
                                        </div>
                                      </Avatar>
                                      <span>{answer.author}</span>
                                      <span>•</span>
                                      <span>{format(answer.timestamp, "dd MMM yyyy", { locale: fr })}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <MessageSquare className="h-12 w-12 mx-auto mb-2 opacity-20" />
                        <p>Aucune réponse pour le moment. Soyez le premier à répondre!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {sortedQuestions.length > 0 ? (
                  <div className="space-y-4">
                    {sortedQuestions.map((question) => (
                      <Card
                        key={question.id}
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => viewQuestion(question)}
                      >
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="hidden md:flex flex-col items-center justify-center gap-1 min-w-[60px]">
                              <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold">{question.answers.length}</span>
                                <span className="text-xs text-muted-foreground">réponses</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold">{question.views}</span>
                                <span className="text-xs text-muted-foreground">vues</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{question.title}</h3>
                              <p className="text-muted-foreground line-clamp-2 mt-1">{question.content}</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {question.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex justify-between items-center mt-2">
                                <div className="md:hidden flex gap-4">
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{question.answers.length}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-muted-foreground"
                                    >
                                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                      <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <span className="text-sm">{question.views}</span>
                                  </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {format(question.timestamp, "dd MMM yyyy", { locale: fr })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 opacity-20"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 15h8" />
                      <path d="M9 9h.01" />
                      <path d="M15 9h.01" />
                    </svg>
                    <p className="text-lg">Aucune question trouvée</p>
                    <p>Essayez de modifier votre recherche ou posez une nouvelle question</p>
                  </div>
                )}
              </div>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

