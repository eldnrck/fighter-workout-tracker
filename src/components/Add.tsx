import type { AddProps } from "../types/fighter-training-tracker.interface";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Button from "../components/Button"



const Add = ({
  isOpen, 
  handleCloseModal, 
  setIsOpen, 
  formData, 
  setFormData,
  handleSubmitForm
}: AddProps) =>{
    
    return (
    <Dialog 
        open={isOpen} 
        onClose={handleCloseModal} 
        className="relative z-10"
        >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
                <div className="bg-white px-6 py-6 w-full">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle 
                    as="h3" 
                    className="text-2xl font-bold text-zinc-800 mb-6">
                      Add Workout
                    </DialogTitle>
                     <div className="mt-2">
                        <form 
                            className="flex flex-col gap-4 w-full"
                            onSubmit={handleSubmitForm}>
                            <input
                                required
                                minLength={1}
                                name="workout"
                                id="workout"
                                value={formData.title}
                                onChange={(e) => 
                                  setFormData((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                                type="text"
                                className="w-full rounded-lg border border-violet-300 bg-white px-4 py-3 text-zinc-800 placeholder:text-zinc-400 transition focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-200"                                placeholder="Workout name"
                                autoFocus
                            />
                            <select
                                required
                                name="discipline"
                                id="discipline"
                                value={formData.discipline}
                                onChange={(e) => 
                                  setFormData((prev) => ({
                                    ...prev,
                                    discipline: e.target.value,
                                  }))
                                }
                                className="w-full rounded-lg border border-violet-300 bg-white px-4 py-3 text-zinc-700 transition focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-200">                                <option value="">Select a discipline</option>
                                <option value="Boxing">Boxing</option>
                                <option value="Kickboxing">Kickboxing</option>
                                <option value="Muay Thai">Muay Thai</option>
                                <option value="BJJ">BJJ</option>
                                <option value="Wrestling">Wrestling</option>
                                <option value="MMA">MMA</option>
                                <option value="Strength">Strength</option>
                                <option value="Conditioning">Conditioning</option>
                                <option value="Running">Running</option>
                                <option value="Recovery">Recovery</option>
                                <option value="Other">Other</option>
                            </select>
                            
                            <input
                                required
                                value={formData.date}
                                onChange={(e) => 
                                  setFormData((prev) => ({
                                    ...prev,
                                    date: e.target.value,
                                  }))
                                }
                                type="date"
                                name="date"
                                id="date"
                                className="w-full rounded-lg border border-violet-300 bg-white px-4 py-3 text-zinc-700 transition focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-200"                            />
                            <input
                                required
                                value={formData.duration}
                                onChange={(e) => 
                                  setFormData((prev) => ({
                                    ...prev,
                                    duration: e.target.value,
                                  }))
                                }
                                type="number"
                                className="w-full rounded-lg border border-violet-300 bg-white px-4 py-3 text-zinc-700 transition focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-200"
                                placeholder="Duration(Minutes)"
                                name="duration"
                                id="duration"
                            />
                            <textarea 
                                 value={formData.notes}
                                onChange={(e) => 
                                  setFormData((prev) => ({
                                    ...prev,
                                    notes: e.target.value,
                                  }))
                                }
                                name="note" 
                                id="note"
                                placeholder="Note(Optional)"
                                className="w-full min-h-28 rounded-lg border border-violet-300 bg-white px-4 py-3 text-zinc-800 placeholder:text-zinc-400 transition focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-200 resize-none"
                              />
                        </form>

                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Button
                  text="Add"
                  type="submit"
                  onClick={handleSubmitForm}
                  formData={formData}
                  setFormData={setFormData}
                  className="inline-flex w-full justify-center rounded-md  bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-violet-500 sm:ml-3 sm:w-auto"
                />
                <Button
                  text="Cancel"
                  formData={formData}
                  setFormData={setFormData}
                  onClick={() => setIsOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )

}

export default Add;