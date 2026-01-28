import { useState } from "react"
import { ChevronLeft, ChevronRight, User, FileText, Image, Calendar, ArrowRight } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "Архив #1",
    title: "Пустой архив",
    icon: User,
    mockup: "empty",
  },
  {
    id: 2,
    category: "Архив #2",
    title: "Пустой архив",
    icon: User,
    mockup: "empty",
  },
  {
    id: 3,
    category: "Архив #3",
    title: "Пустой архив",
    icon: User,
    mockup: "empty",
  },
  {
    id: 4,
    category: "Архив #4",
    title: "Пустой архив",
    icon: User,
    mockup: "empty",
  },
  {
    id: 5,
    category: "Архив #5",
    title: "Пустой архив",
    icon: User,
    mockup: "empty",
  },
]

function EmptyMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <User className="w-3.5 h-3.5" />
        <span>Пустой архив</span>
      </div>

      <div className="mt-2 space-y-2">
        <div className="flex items-center gap-2 px-3 py-2">
          <FileText className="w-4 h-4 text-zinc-600" />
          <span className="text-sm text-zinc-500">Документы: 0</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2">
          <Image className="w-4 h-4 text-zinc-600" />
          <span className="text-sm text-zinc-500">Фото: 0</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2">
          <Calendar className="w-4 h-4 text-zinc-600" />
          <span className="text-sm text-zinc-500">События: 0</span>
        </div>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  return <EmptyMockup />
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))
  }

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Orange indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">Архивы людей</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Готовые шаблоны
              <br />
              для ваших архивов
            </h2>
          </div>

          {/* Description */}
          <div className="lg:max-w-md">
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              Каждый архив готов к заполнению. Добавляйте информацию, фотографии и материалы о людях из вашего комьюнити.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={scrollLeft}
              disabled={scrollPosition === 0}
              className="w-10 h-10 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-400" />
            </button>
            <button
              onClick={scrollRight}
              disabled={scrollPosition >= carouselCards.length - 4}
              className="w-10 h-10 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          {/* Cards container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-3 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${scrollPosition * (100 / 4 + 0.75)}%)`,
              }}
            >
              {carouselCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.id}
                    className="flex-shrink-0 w-[calc(25%-9px)] bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors cursor-pointer"
                    style={{ minWidth: "280px" }}
                  >
                    {/* Card header */}
                    <div className="p-4 border-b border-zinc-800">
                      <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                        <span>{card.category}</span>
                        <span className="text-zinc-700">·</span>
                        <span className="flex items-center gap-1">
                          Пусто <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                      <h3 className="text-white font-medium text-base">{card.title}</h3>
                    </div>

                    {/* Card content */}
                    <div className="h-48 bg-zinc-900/30">
                      <CardMockup type={card.mockup} />
                    </div>

                    {/* Card footer */}
                    <div className="p-4 border-t border-zinc-800/50 flex items-center justify-between">
                      <span className="text-xs text-zinc-500">Ожидает заполнения</span>
                      <Icon className="w-4 h-4 text-zinc-600" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
