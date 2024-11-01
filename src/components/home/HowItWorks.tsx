export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add to Discord",
      description: "Invite Motey to your server with a single click"
    },
    {
      number: "02",
      title: "Upload Emotes",
      description: "Add your favorite emotes to your server's collection"
    },
    {
      number: "03",
      title: "Start Chatting",
      description: "Use your emotes instantly in any conversation"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How Motey Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
              {step.number !== "03" && (
                <div className="hidden md:block absolute top-8 left-2/3 w-full h-0.5 bg-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 