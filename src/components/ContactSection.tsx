// src/components/ContactSection.tsx
import * as React from "react";
import { Mail, MapPin, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            <span className="text-foreground">PERSONAL ACCESS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Direct lines to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* Email Card */}
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:border-kinetic/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-kinetic/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-kinetic" />
              </div>
              <h3 className="font-tech text-xl mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">Direct 1:1 communication</p>
            </div>
            
            <div className="flex-grow flex flex-col">
              <div className="mb-4 flex-grow">
                <div className="bg-background/50 border border-border/50 rounded-lg p-4 text-center">
                  <div className="font-mono text-sm text-foreground break-words">
                    kishoresquash@gmail.com
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full gap-2 mt-auto bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.location.href = "mailto:kishoresquash@gmail.com"}
              >
                <Mail className="w-4 h-4" />
                Open Email
              </Button>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="font-tech text-xl mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm">Personal feed & DMs</p>
            </div>
            
            <div className="flex-grow flex flex-col">
              <div className="mb-4 flex-grow">
                <div className="bg-background/50 border border-border/50 rounded-lg p-4 text-center">
                  <div className="font-mono text-sm text-foreground">
                    @kishorearavind29
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full gap-2 mt-auto bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white"
                onClick={() => window.open("https://www.instagram.com/kishorearavind29/", "_blank")}
              >
                <Instagram className="w-4 h-4" />
                Open Instagram
              </Button>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:border-yellow/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-yellow" />
              </div>
              <h3 className="font-tech text-xl mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Base of operations</p>
            </div>
            
            <div className="flex-grow flex flex-col">
              <div className="mb-4 flex-grow">
                <div className="bg-background/50 border border-border/50 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-systematic/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-systematic" />
                    </div>
                    <div className="text-left">
                      <div className="text-foreground font-medium text-lg">Malaysia</div>
                      <div className="text-sm text-muted-foreground">GMT+8 • Southeast Asia</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full gap-2 mt-auto bg-transparent border border-border hover:bg-muted/10 text-foreground"
                disabled
              >
                <MapPin className="w-4 h-4" />
                Malaysian Time (GMT+8)
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-center">
              <h4 className="font-tech text-xl mb-6">ACCESS PROTOCOL</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-kinetic/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-kinetic" />
                    </div>
                    <span className="font-tech">Email Priority</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Best for detailed conversations and formal communication.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-pink-500" />
                    </div>
                    <span className="font-tech">IG for Updates</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Follow for stories, quick questions, and casual updates.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-yellow/20 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-yellow" />
                    </div>
                    <span className="font-tech">Timezone Aware</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Operating on Malaysian time (GMT+8) for all responses.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="text-sm text-muted-foreground">
                  All communications are handled personally with no automation or bots.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;