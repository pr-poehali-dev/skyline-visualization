import { ChevronRight } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24">
      {/* Gradient overlay at top */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-zinc-400 text-sm">Организация и хранение</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Храните память о важных людях
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Создайте структурированную коллекцию.</span> Организуйте архивы, добавляйте даты, теги и категории для удобного поиска и навигации.
        </p>

        {/* Timeline placeholder */}
        <div className="relative w-full mb-16 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-4">
              <ChevronRight className="w-8 h-8 text-zinc-600" />
            </div>
            <p className="text-zinc-500 text-lg">Визуализация временной шкалы</p>
            <p className="text-zinc-600 text-sm mt-2">Архивы будут отображаться здесь</p>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column */}
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Организуйте материалы</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Добавляйте фотографии, документы, описания и воспоминания. Создавайте полноценные профили людей.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Структура архива</h4>

              {/* Properties row */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Статус</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 text-zinc-300 text-xs">
                    <span className="w-2 h-2 rounded-full bg-zinc-500" />
                    Пустой
                  </span>
                </div>
              </div>

              {/* Materials row */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Материалы</span>
                <span className="text-zinc-600 text-xs">0 файлов</span>
              </div>

              {/* Tags row */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 text-sm w-20">Теги</span>
                <span className="text-zinc-600 text-xs">Не указаны</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Сохраните историю</h3>
            <p className="text-zinc-500 text-base leading-relaxed">
              Каждый архив — это пространство для хранения воспоминаний. Добавляйте описания, даты важных событий и личные истории.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
