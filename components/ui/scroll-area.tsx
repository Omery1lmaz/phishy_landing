"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport 
      className="h-full w-full rounded-[inherit] [&>div]:h-full"
      style={{ overflowY: 'auto', overflowX: 'hidden' }}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => {
  const scrollbarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Force scrollbar to always be visible - check every 50ms
    const interval = setInterval(() => {
      if (scrollbarRef.current) {
        scrollbarRef.current.setAttribute('data-state', 'visible');
        scrollbarRef.current.style.setProperty('opacity', '1', 'important');
        scrollbarRef.current.style.setProperty('visibility', 'visible', 'important');
        scrollbarRef.current.style.setProperty('display', 'flex', 'important');
        scrollbarRef.current.style.setProperty('position', 'absolute', 'important');
        scrollbarRef.current.style.setProperty('right', '0', 'important');
        scrollbarRef.current.style.setProperty('top', '0', 'important');
        scrollbarRef.current.style.setProperty('bottom', '0', 'important');
      }
    }, 50);

    // Also use MutationObserver to catch any state changes
    const observer = scrollbarRef.current ? new MutationObserver(() => {
      if (scrollbarRef.current) {
        scrollbarRef.current.setAttribute('data-state', 'visible');
        scrollbarRef.current.style.setProperty('opacity', '1', 'important');
        scrollbarRef.current.style.setProperty('visibility', 'visible', 'important');
        scrollbarRef.current.style.setProperty('display', 'flex', 'important');
      }
    }) : null;

    if (scrollbarRef.current && observer) {
      observer.observe(scrollbarRef.current, {
        attributes: true,
        attributeFilter: ['data-state', 'style'],
      });
    }

    return () => {
      clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={(node) => {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        scrollbarRef.current = node;
        // Immediately set styles when ref is set
        if (node) {
          // Force immediate visibility
          requestAnimationFrame(() => {
            node.setAttribute('data-state', 'visible');
            node.style.setProperty('opacity', '1', 'important');
            node.style.setProperty('visibility', 'visible', 'important');
            node.style.setProperty('display', 'flex', 'important');
            node.style.setProperty('position', 'absolute', 'important');
            node.style.setProperty('right', '0', 'important');
            node.style.setProperty('top', '0', 'important');
            node.style.setProperty('bottom', '0', 'important');
            node.style.setProperty('width', '10px', 'important');
            node.style.setProperty('z-index', '10', 'important');
          });
        }
      }}
      orientation={orientation}
      data-state="visible"
      className={cn(
        "flex touch-none select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )}
      style={{
        opacity: 1,
        visibility: 'visible',
        display: 'flex',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '10px',
        zIndex: 10,
      }}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb 
        className="relative flex-1 rounded-full bg-gray-500/90 hover:bg-gray-400/100 transition-colors"
        style={{
          opacity: 1,
          visibility: 'visible',
          display: 'block',
          width: '6px',
          minHeight: '20px',
        }}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
})
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }

