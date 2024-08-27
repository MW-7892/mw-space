import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({
  subsets: ['latin']
})

export default function TextDialogue({
  isOpen = false,
  onClose,
  children
}: {
  isOpen?: boolean
  onClose: () => void
  children: JSX.Element | string
}) {

  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={onClose}
    >
      <DialogBackdrop
        transition
        as="div"
        className={`bg-black/70 content-center ${robotoMono.className} backdrop-blur-xs
          bg-blend-overlay fixed inset-0 duration-200 ease-out data-[closed]:opacity-0`}
      >
        <div className="h-fit flex justify-center">
          <DialogPanel
            transition
            className='relative bg-gray-900 card flex flex-col h-fit w-fit rounded-md p-4 
              duration-200 ease-out data-[closed]:scale-y-[30%] data-[closed]:opacity-0
              drop-shadow-md border border-slate-500'
          >
            { children }
            <div className="self-end w-100">
              <button
                className="uppercase text-red-100 mt-6
                  border border-red-100 px-2 py-1 rounded-md hover:bg-red-400
                  duration-200 active:bg-red-600"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </DialogBackdrop>
    </Dialog>
  )
}
