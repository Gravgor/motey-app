import Image from 'next/image';

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Server Owner",
      avatar: "/avatars/alex.png",
      content: "Motey has completely transformed how our community interacts. The custom emotes add so much personality to our chats!"
    },
    {
      name: "Sarah Johnson",
      role: "Community Manager",
      avatar: "/avatars/sarah.png",
      content: "The ease of managing emotes and the huge community pool makes Motey an essential tool for any Discord server."
    },
    {
      name: "Mike Williams",
      role: "Discord Moderator",
      avatar: "/avatars/mike.png",
      content: "The admin controls are fantastic. It's so easy to manage permissions and keep track of emote usage."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-text-secondary">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 