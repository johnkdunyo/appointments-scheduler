import React from 'react'

const TasksTrackerTab = () => {
  return (
    <React.Fragment>
        <div id="tasks-tab" className="tab-pane fade">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <div>                                
                                <h3 className="mb-3">Save Your Time Using Workflow</h3>
                                <p className="mb-md-0">Choose Your Own Workflow From Given Below.<br/>Or Create Your Own Workflow</p>
                            </div>
                            <div className="create-workform">
                                <a href="#create-event" data-toggle="modal" data-target="#create-event" className="btn btn-primary pr-5 position-relative">Create Workflow<span className="event-add-btn"><i className="ri-add-line"></i></span></a>
                            </div>                            
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-info">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-boxes"></i>
                                        </div>
                                        <h4 className="mb-2">Email Reminder to Invitee</h4>                             
                                        <p className="mb-4 card-description">Send automated email reminder to invitees for task.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-info mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-danger">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="lab la-ioxhost"></i>
                                        </div>
                                        <h4 className="mb-2">Email Reminder to Host</h4>                             
                                        <p className="mb-4 card-description">Send automated email reminder to the meeting host.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-danger mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-success">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-envelope-open"></i>
                                        </div>
                                        <h4 className="mb-2">Create Process Template</h4>                             
                                        <p className="mb-4 card-description">Create structured step-by-step process template for team.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-success mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-warning">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-stopwatch"></i>
                                        </div>
                                        <h4 className="mb-2">Run Multiple Instances</h4>                             
                                        <p className="mb-4 card-description">Quickly run multiple instances and checklist for team.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-warning mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-primary">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-handshake"></i>
                                        </div>
                                        <h4 className="mb-2">Track Process and collaborate</h4>                             
                                        <p className="mb-4 card-description">Track activity and prepare checklist to collaborate.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-primary mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-info">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-envelope"></i>
                                        </div>
                                        <h4 className="mb-2">Text Booking confirmation</h4>                             
                                        <p className="mb-4 card-description">Send text message for booking confirmation.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-info mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-danger">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-hourglass"></i>
                                        </div>
                                        <h4 className="mb-2">Email Feedback Survey</h4>                             
                                        <p className="mb-4 card-description">Use forms to collect feedback of the launch campaigns.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-danger mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-success">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-bookmark"></i>
                                        </div>
                                        <h4 className="mb-2">Take follow-up meeting</h4>                             
                                        <p className="mb-4 card-description">Streamline a follow-up process for the internal team.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-success mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body rounded work-detail work-detail-warning">
                                        <div className="icon iq-icon-box-2 mb-3 rounded">
                                            <i className="las la-bell"></i>
                                        </div>
                                        <h4 className="mb-2">Integrate and automate task</h4>                             
                                        <p className="mb-4 card-description">Integrate and automate daily and weekly tasks and sales.</p>
                                        <div className="pt-2">
                                            <a href="page-workflow.html" className="btn btn-warning mr-3 px-4">Use workflow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </React.Fragment>
  )
}

export default TasksTrackerTab