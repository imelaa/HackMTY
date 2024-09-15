"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { getRandomQuestions } from "../utils/randomQuestions"
import { Question, Option, questions } from "../data/questions"

const randomQuestions: Question[] = getRandomQuestions(questions, 5);

export default function FinancialEducationPlatform() {
  const router = useRouter()
  const [step, setStep] = React.useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const [formData, setFormData] = React.useState<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    belbinAnswers: string[];
    investmentAmount: number;
    riskTolerance: number;
  }>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    belbinAnswers: Array(randomQuestions.length).fill(""),
    investmentAmount: 1000,
    riskTolerance: 50
  })
  const [errors, setErrors] = React.useState<{
    email: string;
    password: string;
    confirmPassword: string;
    general: string;
  }>({
    email: "",
    password: "",
    confirmPassword: "",
    general: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (e.target.name in errors) {
      setErrors({ ...errors, [e.target.name]: "" })
    }
  }

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
  }

  const validateStep0 = (): boolean => {
    const newErrors = { ...errors }
    let isValid = true

    if (!formData.name) {
      newErrors.general = "All fields must be filled."
      isValid = false
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address."
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = "Password cannot be empty."
      isValid = false
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleBelbinAnswer = (answer: string) => {
    const newAnswers = [...formData.belbinAnswers]
    newAnswers[currentQuestion] = answer
    setFormData({ ...formData, belbinAnswers: newAnswers })
  }

  const handleNext = () => {
    if (step === 0) {
      if (!validateStep0()) return
      setStep(1)
    } else if (step === 1) {
      if (formData.belbinAnswers[currentQuestion] === "") {
        setErrors({ ...errors, general: "Please select an answer before proceeding." })
        return
      }
      setErrors({ ...errors, general: "" })
      if (currentQuestion < randomQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        const profile = calculateProfile()
        alert(`Your profile type is: ${profile}`)
        router.push("/main")
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      setStep(0)
    }
  }

  const calculateProfile = (): string => {
    const answerCounts: Record<string, number> = formData.belbinAnswers.reduce((counts, answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);

    const profile = Object.entries(answerCounts).reduce((prev, [key, count]) => {
      return count > (answerCounts[prev] || 0) ? key : prev;
    }, "A");

    switch (profile) {
      case "A":
        return "Ejecutor Estratégico";
      case "B":
        return "Conector Estratégico";
      case "C":
        return "Arquitecto Intelectual";
      default:
        return "Perfil No Determinado";
    }
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} required />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} required />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
            <div className="flex flex-col space-y-2">
              <Button className="w-full bg-[#D22E1E] hover:bg-[#B01E0E]" onClick={handleNext}>
                Sign Up
              </Button>
            </div>
          </CardContent>
        )
      case 1:
        const question = randomQuestions[currentQuestion]
        return (
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xl font-bold">{question.question}</Label>
              <div className="space-y-2">
                {question.options.map((option: Option) => (
                  <div
                    key={option.value}
                    className={`w-full p-2 border border-gray-300 rounded-lg ${
                      formData.belbinAnswers[currentQuestion] === option.value
                        ? "bg-[#D22E1E] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <button
                      className="w-full text-left p-2"
                      onClick={() => handleBelbinAnswer(option.value)}
                    >
                      {option.text}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
          </CardContent>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="flex flex-col md:flex-row w-full md:w-[1000px] border border-gray-300 rounded-lg">
        {/* Form section takes 1/3 of the space */}
        <div className="w-full md:w-1/3 flex flex-col justify-between p-4">
          {step === 0 ? (
            <>
              <CardHeader className="flex flex-col items-center">
                <img src="/logo.svg" alt="Logo" className="w-32 h-auto" />
                <CardDescription className="mt-2">
                  {step === 0 ? "Create your account" : `Question ${currentQuestion + 1} of ${randomQuestions.length}`}
                </CardDescription>
              </CardHeader>
              {renderStep()}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 border border-gray-300 rounded-lg">
  <p className="text-lg text-center text-[#D22E1E] font-bold">
  Please answer the following questions to help us determine your role in the financial world.
  </p>
</div>
          )}
        </div>

        {/* Image section takes 2/3 of the space */}
        <div className="md:block md:w-2/3 flex flex-col rounded-r-lg border-l border-gray-300">
          {step === 1 ? (
            <>
              <div className="flex-1 p-4">
                {renderStep()}
              </div>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0 && step === 1}>
                  Previous
                </Button>
                <Button className="bg-[#D22E1E] hover:bg-[#B01E0E]" onClick={handleNext}>
                  {currentQuestion < randomQuestions.length - 1 ? "Next" : "Finish"}
                </Button>
              </CardFooter>
            </>
          ) : (
            <div className="relative h-full">
              <div className="absolute top-0 left-0 right-0 bg-white bg-opacity-75 p-4 text-center z-10">
                <h2 className="text-3xl font-bold text-[#D22E1E]">
                Unlocking Financial Power for the Next Generation
                </h2>
              </div>
              <img
                src="/loginimg.png"
                alt="Financial background"
                className="w-full h-full object-cover rounded-r-lg border-l border-gray-300"
              />
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}